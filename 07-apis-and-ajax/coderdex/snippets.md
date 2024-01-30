```html
<div class="card glass light" id="">
  <img
    src=""
    alt="narcisolobo"
    class="card-image" />
  <div class="card-body">
    <div class="flex flex-start mb">
      <div class="flex-1">
        <h2 class="coder-name"></h2>
        <a href="" target="_blank">
          Github Profile</a
        >
      </div>
    </div>
    <p><strong>Location: </strong></p>
    <p><strong>Repositories: </strong></p>
    <p><strong>Followers: </strong></p>
  </div>
  <div class="card-footer flex flex-end">
    <button class="btn btn-danger">DELETE</button>
  </div>
</div>
```


```js
let usernameInput = document.querySelector('#username');
let cardContainer = document.querySelector('#card-container');

function createCoderCard(data) {
  return `
<div class="card glass light" id="${data.id}">
  <img
    src="${data.avatar_url}"
    alt="${data.login}"
    class="card-image" />
  <div class="card-body">
    <div class="flex flex-start mb">
      <div class="flex-1">
        <h2 class="coder-name">${data.name}</h2>
        <a href="${data.url}" target="_blank">
          Github Profile</a
        >
      </div>
    </div>
    <p><strong>Location: </strong>${data.location}</p>
    <p><strong>Repositories: </strong>${data.public_repos}</p>
    <p><strong>Followers: </strong>${data.followers}</p>
  </div>
  <div class="card-footer flex flex-end">
    <button class="btn btn-danger" onclick="hide('${data.id}')">DELETE</button>
  </div>
</div>
  `;
}

// async/await
async function requestAPI(event) {
  event.preventDefault();

  let username = usernameInput.value;
  let response = await fetch(`https://api.github.com/users/${username}`);
  console.log(response);
  let data = await response.json();
  console.log(data);

  usernameInput.value = '';

  let coderCard = createCoderCard(data);

  cardContainer.innerHTML += coderCard;
}

function hide(id) {
  let element = document.getElementById(id);
  element.remove();
}
```