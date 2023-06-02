import React, {useState} from 'react';
import './List.css';

export default function List({ recipes, onAddRecipe }) {

    const handleAddRecipe = () => {
        onAddRecipe();
      };

    const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };
  
  return (
    <div className='diii'>
    <h1>Recipe App</h1>

    {recipes.length === 0 ? <h2>No recipe found</h2> : <h2>List of Recipes</h2>}

      <button className='but' onClick={handleAddRecipe}>Add Recipe</button>

      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li className='lis' key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedRecipe.name}</h2>
            <h3>Directions:</h3>
            <p>{selectedRecipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}