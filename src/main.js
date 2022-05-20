// Create variables targetting the relevant DOM elements here 👇
var showRandomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
var homeButtonHidden = document.querySelector(".home-button");
var bookImageButton = document.querySelector(".cover-image");
var bookTitleButton = document.querySelector(".cover-title");
var bookTagline1Button = document.querySelector(".tagline-1");
var bookTagline2Button = document.querySelector(".tagline-2");
var makeMyBookButton = document.querySelector(".create-new-book-button");
var savedViewPage = document.querySelector(".saved-view");
var formViewPage = document.querySelector(".form-view");
var homeViewPage = document.querySelector(".home-view");
// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
//missing function names
showRandomCoverButton.addEventListener("click", uponLoad);
//saveCoverButton.addEventListener("click", );
viewSavedButton.addEventListener("click", showSavedView);
makeNewButton.addEventListener("click", showMakeYourOwnView);
homeButtonHidden.addEventListener("click", );
// bookImageButton.addEventListener("click", );
// bookTitleButton.addEventListener("click", );
// bookTagline1Button.addEventListener("click", );
// bookTagline2Button.addEventListener("click", );
// makeMyBookButton.addEventListener("click", );

// Create your event handlers and other functions here 👇
window.addEventListener("load", uponLoad);

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomElement(array) {
  let randomNum = getRandomIndex(array);
  let randomItem = array[randomNum];
  return randomItem;
}

function uponLoad() {
  let loadCover = new RandomCover(covers, titles, descriptors)
  bookImageButton.src = loadCover.cover
  bookTitleButton.innerHTML = loadCover.title
  bookTagline1Button.innerHTML = loadCover.tagline1
  bookTagline2Button.innerHTML = loadCover.tagline2
  return loadCover;
}

function showSavedView() {
  homeViewPage.classList.add("hidden");
  formViewPage.classList.add("hidden");
  showRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButtonHidden.classList.remove("hidden");
  savedViewPage.classList.remove("hidden");
}

function showMakeYourOwnView() {
  homeViewPage.classList.add("hidden");
  showRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  formViewPage.classList.remove("hidden");
}
