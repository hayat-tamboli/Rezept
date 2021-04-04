// import logo from './logo.svg';
import React,{useEffect,useState} from "react";
import Recipie from './recipie';
import './App.css';

function App() {

  const APP_ID = "506f3bb2";
  const APP_KEY = "23def5dfe876ef82a68e16d914d4c0e0";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");

  // this runs at every state change
  // useEffect(()=>{
  //   console.log('Effect has been run');
  // });

  // this runs at once or at one specific state
  useEffect(()=>{
    getRecipies();
  }, [query]);

  const getRecipies = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <div className="header">
      <form className="search-form" onSubmit={getSearch}>
        <input type="search" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button"> Search</button>
      </form>
      </div>
      <div className="allRecipies">
      {recipies.map(orecipie => (
        <Recipie key={orecipie.recipe.label} title={orecipie.recipe.label} calories={Math.round(orecipie.recipe.calories)} image={orecipie.recipe.image}/>
      ))}
      </div>
    </div>
  );
}

export default App;
