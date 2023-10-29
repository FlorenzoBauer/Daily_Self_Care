var affButton = document.getElementById("AffirmationButton");
var mantrasButton = document.getElementById("MantrasButton");
var message = document.getElementById("recieveMessage");
var logo = document.getElementById("bigLogo");
var disMessage = document.getElementById("displayMessage");
var clearButton = document.getElementById("clearButton");



message.addEventListener("click", choice);
clearButton.addEventListener("click", clear);

function getRandomAffirmation() {
  var randomAIndex = getRandomIndex(affirmations);
  return affirmations[randomAIndex];
}
function getRandomMantra() {
  var randomMIndex = getRandomIndex(mantras);
  return mantras[randomMIndex];
}

function choice() {
  if (affButton.checked == true) {
    var randomAffirmation = getRandomAffirmation();
    disMessage.innerText = randomAffirmation;
  } else if (mantrasButton.checked == true) {
    var randomMantra = getRandomMantra();
    disMessage.innerText = randomMantra;
  } else {
    window.alert("Please select an option");
    return;
  }

  logo.style.visibility = 'hidden';
  clearButton.style.visibility = 'visible';
}
function clear(){
  clearButton.style.visibility = 'hidden';
  logo.style.visibility = 'visible';
  disMessage.innerText = "";
  affButton.checked = false;
  mantrasButton.checked = false;
}
function randomAffirmation() {
  var randomAIndex = getRandomIndex(affirmations);
  return randomAIndex;
}

function randomMantra() {
  var randomMIndex = getRandomIndex(mantras);
  return randomMIndex;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}