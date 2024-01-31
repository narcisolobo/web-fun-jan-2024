/* 
  PSEUDOCODE:

  1. username is entered
  2. get username (value of the text input)
  3. when button is pressed make a get request to github api using username
  4. parse json response, cherry pick necessary info
  5. inject info into new card
  6. render card onto page
*/

const usernameInput = document.getElementById('username');
let cardContainer = document.getElementById('card-container');

async function getCoder() {
  console.log(usernameInput.value);
  const username = usernameInput.value;
  usernameInput.value = '';
  const response = await fetch(`https://api.github.com/users/${username}`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  const coderCard = createCoderCard(data);
  cardContainer.innerHTML += coderCard;
}

function createCoderCard(data) {
  const coderCard = `
<div class="card glass light" id="${data.id}">
  <img
    src="${data.avatar_url}"
    alt="${data.login}"
    class="card-image" />
  <div class="card-body">
    <div class="flex flex-start mb">
      <div class="flex-1">
        <h2 class="coder-name">${data.name}</h2>
        <a href="${data.html_url}" target="_blank"> Github Profile</a>
      </div>
    </div>
    <p><strong>Location: ${data.location}</strong></p>
    <p><strong>Repositories: ${data.public_repos}</strong></p>
    <p><strong>Followers: ${data.followers}</strong></p>
  </div>
  <div class="card-footer flex flex-end">
    <button class="btn btn-danger">DELETE</button>
  </div>
</div>`;
  return coderCard;
}
