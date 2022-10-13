import fetchData from './fetch_data.js';

const ul = document.querySelector('.score_lists');

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

export default renderList;