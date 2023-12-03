const MovieBox = document.querySelector(".Container");
const SearchBox = document.querySelector(".SearchBox");
const Btn = document.querySelector("#Search-Btn");

// CALLING API
const FetchApi = async (value) => {
  const Api = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=f7d497f6`);
  const Response = await Api.json();
  ShowMovie(Response.Search);
  console.log(Response);
};

// DISPLAY DATA IN HTML DOCUMENT
const ShowMovie = (Response) => {
  MovieBox.innerHTML = "";
  Response.forEach((Item) => {
    const box = document.createElement("div");
    box.classList.add("Show-Data");
    box.innerHTML = `<div class="Show-Data">
              <div class="card">
                <img src="${Item.Poster}" alt="${Item.Title}" style="width:280PX">
                <div class="container">
                  <h2 class="Heading-1">${Item.Title}</h2>
                  <h3 class="Heading-2">${Item.Year}</h3>
                  <h4>${Item.Type}</h4>
                </div>
              </div>
              </div>`;
    MovieBox.appendChild(box);
  });
};

// ADD SEARCHBAR TO FILTER SEARCH DATA
SearchBox.addEventListener("keyup", (e) => {
  const value = e.target.value;
  console.log(value);
  if (value !== "") {
    const Change = FetchApi(value);
    console.log(Change);
  } else {
    SearchMovies();
  }
});

// CALLING FUNCTION
FetchApi();
