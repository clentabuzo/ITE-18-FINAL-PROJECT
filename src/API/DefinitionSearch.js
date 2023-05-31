import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function DefinitionSearch() {
  const [word, setWord] = useState(''); // State variable to store the entered word
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate('/definition/' + word); // Navigate to the definition page with the entered word as a parameter
  };

  return (
    <div className="centered-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-input"
          placeholder="Enter a word"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)} // Update the word state as the input value changes
        />
        
      </form>
    </div>
  );
}
