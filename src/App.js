import React, { useState, useEffect } from 'react';
import List from './List';
import Make from './Make';

export default function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

 
  const [showMake, setShowMake] = useState(false);

  const handleAddRecipe = () => {
    setShowMake(true);
  };

  
  const handleSaveRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    setShowMake(false);
  };

  return (
    <div>
      {!showMake && <List recipes={recipes} onAddRecipe={handleAddRecipe} />}
      {showMake && <Make onSave={handleSaveRecipe} />}
    </div>
  );
}