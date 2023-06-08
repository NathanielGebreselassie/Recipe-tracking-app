import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  function deleteRecipe(index) {
  setRecipes(recipes.filter((recipe, i) => {
    return i !== index;
  }));
}

  
  return (
    <div className="App">
      <header>
        <h1 className="title">Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
