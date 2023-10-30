var affButton = document.getElementById("affirmation");
var mantrasButton = document.getElementById("mantra");
var message = document.querySelector(".message-form__button");
var logo = document.querySelector(".message-display__img");
var disMessage = document.querySelector(".message-display__blessing");
var clearButton = document.querySelector(".message-display__button");
message.addEventListener('click', choice);
clearButton.addEventListener('click', clear);

function getRandomAffirmation() {
  var randomAIndex = getRandomIndex(affirmations);
  return affirmations[randomAIndex];
}
function getRandomMantra() {
  var randomMIndex = getRandomIndex(mantras);
  return mantras[randomMIndex];
}

function choice(event) {
  event.preventDefault();
  if (affButton.checked == true) {
    var randomAffirmation = getRandomAffirmation();
    disMessage.innerText = randomAffirmation;
  } else if (mantrasButton.checked == true) {
    var randomMantra = getRandomMantra();
    disMessage.innerText = randomMantra;
  }
  logo.style.maxWidth = "0px";
  clearButton.style.visibility = 'visible';
  clearButton.style.height = "20px";
  clearButton.style.width = "120px";
  }


function clear(){
  logo.style.maxWidth = "100px";
  clearButton.style.visibility = 'hidden';
  clearButton.style.height = "0px";
  clearButton.style.width = "0px";
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