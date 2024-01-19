var projectVotes = document.querySelector('#project-votes');
var catVotes = document.querySelector('#cat-votes');
var searchInput = document.querySelector('#search');
var title = document.querySelector('#title');
var catPic = document.querySelector('#cat-pic');
var favoriteRule = document.querySelector('#favorite-rule');

function removeElement(elem) {
  elem.remove();
}

function projectUpVote() {
  projectVotes.textContent++;
}

function catUpVote() {
  catVotes.textContent++;
}

function searchAlert() {
  alert('Searching for ' + searchInput.value);
}

function changeTitle() {
  title.textContent = 'c/Meow';
}

function changeCat() {
  catPic.src = './images/cat-2.jpg';
}

function joinDiscord() {
  setTimeout(discordAlert, 3000);
}

function discordAlert() {
  alert('Joining Discord server...');
}

function showFavorite() {
  alert(favoriteRule.value);
}
