const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-book-form" class="mb-4">
      <div class="form-group">
        <label for="title">Author Name</label>
        <input type="text" class="form-control" id="author-first-name" aria-describedby="authorFirstName" placeholder="Enter First Name" required><br/>
        <input type="text" class="form-control" id="author-last-name" aria-describedby="authorLastName" placeholder="Enter Last Name" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite">
        <label class="form-check-label" for="favorite">Add to Favorites</label>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;
};

export default addAuthorForm;
