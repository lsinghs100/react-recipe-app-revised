import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [recipe, setRecipe] = useState(initialFormData);

  const handleChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({ ...initialFormData });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={recipe.name}
                placeholder="Name"
                required // Added required attribute
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                onChange={handleChange}
                value={recipe.cuisine}
                placeholder="Cuisine"
                required // Added required attribute
              />
            </td>
            <td>
              <input
                type="url"
                id="photo"
                name="photo"
                onChange={handleChange}
                value={recipe.photo}
                placeholder="URL"
                required // Added required attribute
              />
            </td>
            <td className="content_td">
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={recipe.ingredients}
                placeholder="Ingredients"
                required // Added required attribute
              />
            </td>
            <td className="content_td">
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={recipe.preparation}
                placeholder="Preparation"
                required // Added required attribute
              />
            </td>
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
