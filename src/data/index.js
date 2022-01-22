export default (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
