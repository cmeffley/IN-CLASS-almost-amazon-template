// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  array.forEach((item) => {
    // Create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
    <div class="card-body" style="height: 200px;">
    <h3 class="card-text">${item.first_name}</h3>
    <h3 class="card-text">${item.last_name}</h3>
    <p class="card-text bold">${item.favorite && `<span class="badge badge-info favorite-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite</span> ${item.favorite}`}</p>
    <hr>
    <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
