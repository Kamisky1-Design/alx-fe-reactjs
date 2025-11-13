import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);
        return (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              margin: '10px 0',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <button
              onClick={() =>
                isFavorite
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
              style={{
                marginLeft: '10px',
                background: isFavorite ? '#f44' : '#4caf50',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
              }}
            >
              {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
