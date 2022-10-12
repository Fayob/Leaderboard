import './style.css';

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const ul = document.querySelector('.score_lists');
const submitButton = document.querySelector('.form_button');
const refreshButton = document.querySelector('.refresh_button');

const postData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qjLj9u9fMLSXGQqpMT2o/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  await response.json();
  nameInput.value = '';
  scoreInput.value = '';
};

const fetchData = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qjLj9u9fMLSXGQqpMT2o/scores/');
  const scoreLists = await data.json();
  return scoreLists;
};

const renderList = async () => {
  const data = await fetchData();
  const scoreLists = data.result;
  scoreLists.forEach((list) => {
    const li = document.createElement('li');
    li.classList.add('score_list');
    li.innerHTML = `
      ${list.user}: ${list.score}
        `;
    ul.appendChild(li);
  });
};

const refresh = () => {
  window.location.reload();
};

document.addEventListener('DOMContentLoaded', renderList);
refreshButton.addEventListener('click', refresh);
submitButton.addEventListener('click', postData);
