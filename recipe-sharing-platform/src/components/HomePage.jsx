import React, { useState, useEffect } from 'react';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // In a real app you might fetch this, here we just set the mock data
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Recipe Sharing Platform
        </h1>
        <p className="mt-2 text-xl text-gray-500">
          Discover and share amazing recipes from around the world.
        </p>
      </header>

      {/* Step 4: Implement a Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          // Step 3: Style the Recipe Card with Tailwind CSS
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              className="w-full h-48 object-cover"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <a
                href={`#recipe-${recipe.id}`} // Placeholder link for now
                className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              >
                View Recipe &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
