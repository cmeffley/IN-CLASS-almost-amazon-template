import { deleteAuthor, getSingleAuthor } from './authorData';
import { deleteBook, getAuthorBooks } from './bookData';

// DELETE AUTHOR AND ALL THEIR BOOKS
const deleteAuthorBooks = (authorId, uid) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorBooksArray) => {
    const deleteBooks = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(authorId, uid)));
  }).catch((error) => reject(error));
});

const authorBookInfo = (authorId) => new Promise((resolve, reject) => {
  const author = getSingleAuthor(authorId);
  const authorBooks = getAuthorBooks(authorId);

  Promise.all([author, authorBooks]) // author & authorBooks are Promises
    .then(([authorResponse, authorBooksResponse]) => resolve(
      // can do .then((response)) and resolve( { author: response[0], books: response[1] })
      { author: authorResponse, books: authorBooksResponse }
    )) // creating key value(are taco) pairs by deconstructing to make a new object. THIS IS BIG FOR YOU BEING A GOOD DEV
    .catch((error) => reject(error));
});

export { deleteAuthorBooks, authorBookInfo };
