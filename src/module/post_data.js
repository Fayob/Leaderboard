const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

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

export default postData;