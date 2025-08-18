const body = document.body;
let commonImagePath = '../images/';
const siteNewsFont = document.getElementById("site-news");

// User Interface Window
const userInterfaceWindow = document.getElementById("user-interface-window");
const passwordForm = document.getElementById("password-form");
const thePassword = document.getElementById("password-here");
const passwordStatus = document.getElementById("password-status");

let ankhKey = 0;
let audio95 = new Audio('win95.mp3');

// views
const homescreen = document.getElementById("homescreen");
const pineglenDiv = document.getElementById("pineglen-div");
const msmsDiv = document.getElementById("msms-div");
const bhsDiv = document.getElementById("bhs-div");

const buildingPhotoViewer = document.getElementById("pine-glen-building-photos");
const guestbookDiv = document.getElementById("guestbook-div");
const fileDiv = document.getElementById("file-div");

const arcadeDiv = document.getElementById("arcade-div");
const iframeSkinsuit = document.getElementById("iframe-skinsuit");
const obitoIframe = document.getElementById("obito"); // iframe holder

// classes
const largeText = document.getElementsByClassName("large");

// Carousel
const itemA = document.getElementsByClassName("a");
const itemB = document.getElementsByClassName("b");
const itemC = document.getElementsByClassName("c");

// Slider
let currentIndex = 0;

// BP
const bpIframe = document.getElementById("bp-iframe");
// Guestbook
const guestbookIframe = document.getElementById("guestbook-frame");
// file
const fileIframe = document.getElementById("file-iframe");