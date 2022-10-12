import './style.css';

// const nameInput = document.querySelector('#name');
// const scoreInput = document.querySelector('#score');
const scoreLists = document.querySelector('.score_lists');

const Lists = [
  {
    name: 'James',
    score: 10,
  },
  {
    name: 'John',
    score: 20,
  },
  {
    name: 'Jeremiah',
    score: 40,
  },
  {
    name: 'Joseph',
    score: 50,
  },
];

const renderList = () => {
  Lists.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('score_list');
    li.innerHTML = `
         <li>${item.name}: ${item.score}</li>
        `;
    scoreLists.appendChild(li);
  });
};

renderList();