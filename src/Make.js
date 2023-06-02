import React, { useState, useEffect } from 'react';
import './Make.css'; // Import the CSS file for styling
// import recipes from './recipes'; // Import the recipes data

export default function Make({onSave}) {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const handleReset = () => {
    setRecipeName('');
    setIngredients('');
    setDirections('');
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const handleSave = () => {
    // Create a new recipe object
    if(recipeName !== "" && ingredients !== "" && directions !== ""){ //only save if every field is filled
    const newRecipe = {
      id: recipes.length + 1,                                         // Generate a unique id for the new recipe
      name: recipeName,
      ingredients: ingredients.split('\n'),                           // Split ingredients into an array
      description: directions,
    };

    setRecipes([...recipes, newRecipe]);
    localStorage.setItem('recipes', JSON.stringify([...recipes, newRecipe]));

    onSave(newRecipe);
    }
    
    else{
        alert("Please enter valid values");
    }

    // Reset the form fields
    handleReset();
  };

  return (
    <div className="make-form-container">
      <h1>Recipe Form</h1>

      <div className="form-group">
        <h3>Recipe Name:</h3>
        <input
          id="recipeName"
          type="text"
          value={recipeName}
          placeholder='Name'
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <h3>Ingredients:</h3>
        <textarea
          id="ingredients"
          placeholder='Press Enter after every ingredient:'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>

      <div className="form-group">
        <h3>Directions:</h3>
        <textarea
          id="directions"
          placeholder='Write the Directions to make the Recipe'
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button className="reset-button" onClick={handleReset}>
          RESET
        </button>
        <button className="save-button" onClick={handleSave}>
          SAVE
        </button>
      </div>
    </div>
  );
}
