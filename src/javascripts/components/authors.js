// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    // Create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
    <div class="card-body" style="height: 200px;">
    <a href="#"><h3 id="author-name-title--${item.firebaseKey}"
    class="card-title">${item.first_name} ${item.last_name}</h3></a>
    <p class="card-text bold">${item.favorite && `<span class="badge badge-info favorite-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite</span> ${item.favorite}`}</p>
    <hr>
    <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
