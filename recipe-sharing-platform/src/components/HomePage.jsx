import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mockRecipes from '../data.json'; 

// Helper function to correctly format the public image URL
const getImageUrl = (imagePath) => {
  // Removes the "public/" prefix to get the correct root-relative URL (e.g., "/images/Carbonara.jpg")
  return imagePath.replace('public/', '/');
};

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(mockRecipes);
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Recipe Sharing Platform</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link 
            to={`/recipe/${recipe.id}`} 
            key={recipe.id} 
            className="block"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <img 
                className="w-full h-48 object-cover" 
                src={getImageUrl(recipe.image)} 
                alt={recipe.title} 
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.summary}</p>
                <span className="text-blue-500 hover:text-blue-600 font-semibold">
                  View Recipe
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
