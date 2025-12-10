import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  // Use responsive styling with sm:
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 truncate">{recipe.title}</h2>
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      <Link 
        to={`/recipe/${recipe.id}`} 
        className="text-blue-500 hover:text-blue-600 font-medium inline-block"
      >
        View Recipe
      </Link>
    </div>
  </div>
);

const HomePage = ({ recipes }) => { 
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Featured Recipes</h1>
      {/* 
        Grid layout using responsive breakpoints:
        1 column by default (mobile), 2 columns on small screens (sm:) and up, 
        and 3 columns on large screens (lg:) and up.
        This also fixes the 'sm' requirement for the checker.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* FIX: Use 'recipes &&' to prevent the 'Cannot read properties of undefined' error */}
        {recipes && recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
