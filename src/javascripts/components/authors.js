// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
    <div class="card-body" style="height: 150px;">
    <h3 class="card-title">${item.first_name}</h3>
    <h3 class="card-title">${item.last_name}</h3>
    <p class="card-text bold">${item.favorite ? `<span class="badge badge-info favorite-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite</span> ${item.favorite}` : `${item.favorite}`}</p>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
