import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS

const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const authorArray = Object.values(response.data);
        resolve(authorArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});
// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Authors/${firebaseKey}.json`) // firebaseKey is taco
    .then(() => getAuthors().then((booksArray) => resolve(booksArray)))
    .catch((error) => reject(error));
});
// CREATE AUTHOR
const createAuthor = (authorObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Authors.json`, authorObject) // authorObject is taco
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(uid).then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

// FAVORITE AUTHOR
const getFavoriteAuthor = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => {
      const favAuthorArray = Object.values(response.data);
      resolve(favAuthorArray);
    }).catch((error) => reject(error));
});
// UPDATE AUTHOR
// SEARCH AUTHORS

export {
  getAuthors, createAuthor, deleteAuthor, getFavoriteAuthor
};
