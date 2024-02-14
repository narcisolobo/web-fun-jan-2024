const dadJokeParagraph = document.getElementById('dad-joke');
const popUpModal = document.getElementById('popUpModal');
console.log(dadJokeParagraph);

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

async function getDadJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
  dadJokeParagraph.textContent = data.joke;
}

getDadJoke();
