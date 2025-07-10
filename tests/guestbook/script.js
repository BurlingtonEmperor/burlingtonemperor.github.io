function sendToGoogleDoc() {
  const name = document.getElementById('name').value;
  const msg = document.getElementById('message').value;
  const fullMsg = `${name}: ${msg}`;

  fetch("https://script.google.com/macros/s/AKfycbzraCohF0CeM-XYxWW_PISIsOoCZjsh9-I_y84T7v_gp4qYSbUvLB0RWKTNx-FfDY94/exec", {
    method: "POST",
    body: JSON.stringify({ message: fullMsg }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert("Error: " + err.message));
}