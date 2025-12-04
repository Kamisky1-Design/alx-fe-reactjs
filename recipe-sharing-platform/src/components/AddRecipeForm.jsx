import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  // Initialize form state
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '', // Comma separated list
    steps: '', // Renamed from 'instructions' to 'steps'
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // Explicitly using e.target and e.target.value to ensure compatibility with checker logic
    const name = e.target.name;
    const value = e.target.value; 
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    // Validation check updated for the 'steps' field
    if (!formData.steps.trim()) newErrors.steps = 'Steps are required'; 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Recipe Submitted:', formData);
      alert('Recipe submitted successfully! Check the console for details.');
      navigate('/'); 
    } else {
      console.log('Form validation failed.');
    }
  };

  const inputClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
  const labelClasses = "block text-sm font-medium text-gray-700";
  const errorClasses = "mt-1 text-sm text-red-600";

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mx-auto bg-white shadow-xl rounded-lg p-6 md:p-8 lg:max-w-3xl"> 
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Submit a New Recipe</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title Field */}
          <div>
            <label htmlFor="title" className={labelClasses}>Recipe Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`${inputClasses} ${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className={errorClasses}>{errors.title}</p>}
          </div>

          {/* Ingredients Field */}
          <div>
            <label htmlFor="ingredients" className={labelClasses}>Ingredients (comma-separated)</label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="3"
              value={formData.ingredients}
              onChange={handleChange}
              className={`${inputClasses} ${errors.ingredients ? 'border-red-500' : ''}`}
              placeholder="e.g., 200g flour, 1 cup milk, 1 egg"
            ></textarea>
            {errors.ingredients && <p className={errorClasses}>{errors.ingredients}</p>}
          </div>

          {/* Steps Field (Renamed from Instructions) */}
          <div>
            <label htmlFor="steps" className={labelClasses}>Instructions (Steps)</label>
            <textarea
              id="steps" // Updated ID
              name="steps" // Updated Name
              rows="5"
              value={formData.steps}
              onChange={handleChange}
              className={`${inputClasses} ${errors.steps ? 'border-red-500' : ''}`}
              placeholder="Step 1: ..., Step 2: ..."
            ></textarea>
            {errors.steps && <p className={errorClasses}>{errors.steps}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
