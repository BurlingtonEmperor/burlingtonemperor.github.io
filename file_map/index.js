const fileListContainer = document.getElementById('file-list');
const folderTreeContainer = document.getElementById('folder-tree');
const breadcrumbContainer = document.getElementById('breadcrumb');

const folderMap = {}; // folderId → { name, parentId, children: [], files: [] }

const iconMap = {
  'application/pdf': '📄',
  'application/vnd.google-apps.document': '📝',
  'application/vnd.google-apps.spreadsheet': '📊',
  'application/vnd.google-apps.presentation': '📽️',
  'application/vnd.google-apps.folder': '📁',
  'image/jpeg': '🖼️',
  'image/png': '🖼️',
  'video/mp4': '🎞️',
  'audio/mpeg': '🎵',
  'default': '📦'
};

function getIcon(mimeType) {
  return iconMap[mimeType] || iconMap['default'];
}

async function fetchFolderContents(folderId) {
  const query = `'${folderId}' in parents and trashed = false`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink,thumbnailLink,parents)`;

  const res = await fetch(url);
  const data = await res.json();
  return data.files;
}

async function buildFolderTree(folderId, parentId = null) {
  const files = await fetchFolderContents(folderId);
  folderMap[folderId] = folderMap[folderId] || { name: '(Unnamed)', parentId, children: [], files: [] };

  for (const item of files) {
    if (item.mimeType === 'application/vnd.google-apps.folder') {
    folderMap[item.id] = { name: item.name, parentId: folderId, children: [], files: [] };
    folderMap[folderId].children.push(item.id);
    await buildFolderTree(item.id, folderId); // recurse
    } else {
      folderMap[folderId].files.push(item);
    }
  }
}

function renderFolderTree(currentId, indent = 0) {
  const folder = folderMap[currentId];
  const div = document.createElement('div');
  div.className = 'folder indent';
  div.style.marginLeft = `${indent * 15}px`;
  div.textContent = folder.name === '(Unnamed)' ? 'Root' : folder.name;
  div.onclick = () => {
    renderFilesInFolder(currentId);
    updateBreadcrumb(currentId);
  };
  folderTreeContainer.appendChild(div);

  for (const childId of folder.children) {
    renderFolderTree(childId, indent + 1);
  }
}

function renderFilesInFolder(folderId) {
  fileListContainer.innerHTML = '';
  const files = folderMap[folderId]?.files || [];

  files.forEach(file => {
    const item = document.createElement('div');
    item.className = 'file-item';

    let content = '';
    if (file.thumbnailLink && (file.mimeType.startsWith('image/') || file.mimeType === 'application/pdf')) {
      content += `<img src="${file.thumbnailLink}" alt="${file.name}">`;
    } else {
      content += `<div class="file-icon">${getIcon(file.mimeType)}</div>`;
    }

    content += `<a href="${file.webViewLink}" target="_blank">${file.name}</a>`;
    item.innerHTML = content;
    fileListContainer.appendChild(item);
  });
}

function updateBreadcrumb(currentId) {
  const path = [];
  let id = currentId;
  while (id) {
    path.unshift({ id, name: folderMap[id]?.name || '(Unnamed)' });
    id = folderMap[id]?.parentId;
  }

  breadcrumbContainer.innerHTML = '';
  path.forEach((p, index) => {
    const span = document.createElement('span');
    span.textContent = p.name;
    span.onclick = () => {
      renderFilesInFolder(p.id);
      updateBreadcrumb(p.id);
    };

    breadcrumbContainer.appendChild(span);
    if (index < path.length - 1) {
      breadcrumbContainer.appendChild(document.createTextNode(' / '));
    }
  });
}

// Init
(async () => {
  await buildFolderTree(ROOT_FOLDER_ID);
  renderFolderTree(ROOT_FOLDER_ID);
  renderFilesInFolder(ROOT_FOLDER_ID);
  updateBreadcrumb(ROOT_FOLDER_ID);
})();

const loadInterval = setInterval(function () {
  if (breadcrumbContainer.innerHTML === null || breadcrumbContainer.innerHTML === "" || breadcrumbContainer.innerHTML === undefined) {
    // do nothing
  }

  else {
    document.getElementById("loading-div").style.display = "none";
  }
}, 500);