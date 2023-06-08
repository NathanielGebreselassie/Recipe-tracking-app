import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleInputChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleInputChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Photo URL:</td>
            <td>
              <input
                type="text"
                name="photo"
                value={recipe.photo}
                onChange={handleInputChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleInputChange}
                required
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Preparation:</td>
            <td>
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleInputChange}
                required
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
