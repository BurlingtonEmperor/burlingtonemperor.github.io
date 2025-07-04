const body = document.body;

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

// classes
const largeText = document.getElementsByClassName("large");

// Carousel
const itemA = document.getElementsByClassName("a");
const itemB = document.getElementsByClassName("b");
const itemC = document.getElementsByClassName("c");

// Slider
let currentIndex = 0;