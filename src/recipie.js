import React from "react";
import "./App.css";

function Recipie({ title, calories, image, ingredients }) {
  return (
    <div className="Recipie">
      <p className="calories">🔥 {calories}</p>
      <img src={image} alt="" width="354px" height="250px" loading="lazy" />
      <div className="content">
        <h2>{title}</h2>
        <h4>Ingredients</h4>
        <ol className="ingredientList">
          {ingredients.map((ingredient) => {
            return <li className="ingredient">{ingredient}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
export default Recipie;
