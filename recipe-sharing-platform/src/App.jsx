import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
// Import the new component
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        
        {/* Simple Navigation Header */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Recipe Platform
            </Link>
            <Link 
              to="/add-recipe" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow transition duration-200"
            >
              Add New Recipe
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          {/* Add the new route */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
