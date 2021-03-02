import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (uid) => new Promise((resolve, reject) => { // uid here is taco
  axios.get(`${dbUrl}/Books.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSaleBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Books.json?orderBy="sale"&equalTo=true`)
    .then((response) => {
      const saleBooksArray = Object.values(response.data);
      resolve(saleBooksArray);
    }).catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Books/${firebaseKey}.json`) // firebaseKey is taco
    .then(() => getBooks().then((booksArray) => resolve(booksArray)))
    .catch((error) => reject(error));
});

// CREATE BOOK
const createBook = (bookObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Books.json`, bookObject) // bookObject is taco
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Books/${response.data.name}.json`, body)
        .then(() => {
          getBooks(uid).then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE BOOK
// SEARCH BOOKS
export {
  getBooks, createBook, deleteBook, getSaleBooks
};
