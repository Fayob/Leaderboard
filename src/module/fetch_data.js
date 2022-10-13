const fetchData = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qjLj9u9fMLSXGQqpMT2o/scores/');
  const scoreLists = await data.json();
  return scoreLists;
};

export default fetchData;