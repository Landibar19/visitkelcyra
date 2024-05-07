// Search.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/results/${query}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{paddingTop:25}}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}