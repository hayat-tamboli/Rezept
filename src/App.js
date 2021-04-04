// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import Recipie from "./recipie";
import "./App.css";

function App() {
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");

  // this runs at every state change
  // useEffect(()=>{
  //   console.log('Effect has been run');
  // });

  // this runs at once or at one specific state
  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Rezept</h1>
        <form className="search-form" onSubmit={getSearch}>
          <ion-icon name="search"></ion-icon>
          <input
            type="search"
            className="search-bar"
            value={search}
            onChange={updateSearch}
            placeholder="Put any ingredient..."
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="allRecipies">
        {recipies.map((recipe) => (
          <Recipie
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
      <br />
      <p>
        made with ⚛️ by
        <a href="https://www.linkedin.com/in/hayat-tamboli/">Hayat Tamboli</a>
      </p>
      <br />
      <code>yeah paneer is my favorite</code>
      <br />
    </div>
  );
}

export default App;
