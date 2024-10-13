import React, { useState } from 'react';
import './Search.css';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} 
          placeholder="Search..." 
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Search;
