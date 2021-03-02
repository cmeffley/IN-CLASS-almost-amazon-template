import { emptyBooks, showBooks } from '../components/books';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../helpers/data/bookData';
import { emptyAuthors, showAuthors } from '../components/authors';
import { getAuthors } from '../helpers/data/authorData';

const startApp = (userObject) => { // userObject is taco
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getBooks(userObject.uid).then((Books) => { // Books is taco
    if (Books.length) {
      showBooks(Books);
    } else {
      emptyBooks();
    }
  }); // PUT ALL THE BOOKS ON THE DOM
  getAuthors(userObject.uid).then((Authors) => {
    if (Authors.length) {
      showAuthors(Authors);
    } else {
      emptyAuthors();
    }
  });
};

export default startApp;
