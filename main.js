var affButton = document.getElementById("AffirtmationButton");
var mantrasButton = document.getElementById("MantrasButton");
var message = document.getElementById("recieveMessage");

message.addEventListener("click", choice);


function choice() {
    if (affButton.checked === false) {
        getRandomIndex(affirmations);

    } 
    else if (mantrasButton.checked === false) {
        getRandomIndex(mantras);
    } 
    else {
        alert("Please select an option");
    }
}
function randomAffirmation() {

}
function randomMantra() {

}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }