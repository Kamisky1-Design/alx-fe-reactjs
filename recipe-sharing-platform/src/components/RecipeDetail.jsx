import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import mockRecipes from '../data.json'; 

// Helper function to correctly format the public image URL
const getImageUrl = (imagePath) => {
    // Removes the "public/" prefix
    return imagePath.replace('public/', '/');
};

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = mockRecipes.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]); 

  if (!recipe) {
    return <div className="p-8 text-center text-gray-600">Loading or Recipe Not Found...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <img 
            className="w-full h-64 object-cover" 
            src={getImageUrl(recipe.image)} 
            alt={recipe.title} 
        />
        
        <div className="p-6 md:p-10">
          <Link to="/" className="text-blue-500 hover:text-blue-700 mb-6 inline-block font-semibold">
            &larr; Back to Home
          </Link>
          
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-8 italic">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3 border-b pb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3 border-b pb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-600 ml-4">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
