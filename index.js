let message = document.querySelector("#message");



//add movie function
function addMovie(event) {
  event.preventDefault();

  let inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");

  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener('click', crossOffMovie);

  movie.appendChild(movieTitle);
 //delete button if clicked
  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = 'x';

  deleteBtn.addEventListener("click", deleteMovie);

  movie.appendChild(deleteBtn);

  //put the movie element inside of unordered list element
  document.querySelector("ul").appendChild(movie);
  //reassign inputField to default empty after each click
  inputField = ' ';

}

const form = document.querySelector("form")

form.addEventListener("submit", addMovie);


//Delete movie function
function deleteMovie(event) {
  //remove the entire list item
  event.target.parentNode.remove();
  //when it does get deleted these things happen below
  message.textContent = "Movie Deleted";
}

function crossOffMovie(event) {
  //un-cross off the entire list item
  event.target.classList.toggle("checked");
  //when it does get crossed off theese things happen below
  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie Watched";
  } else {
    message.textContent = "Movie added back!";
  }
}







