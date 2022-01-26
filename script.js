'use strict';

const getData = () => {
  const text = fetch('db.json');
  text
    .then(response => response.json())
    .then(item => {
      console.log(item);
      sendData(item)
    })
};

const sendData = (item) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(item => console.log(item));
}
getData();