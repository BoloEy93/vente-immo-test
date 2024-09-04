import React, { useState, useEffect } from 'react';

const Search = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fetch or filter data based on the search query
  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery) {
        try {
          // Example API call, replace with actual API endpoint or filtering logic
          const response = await fetch(`/api/search?query=${searchQuery}`);
          const data = await response.json();
          setResults(data);  // Update the local state with search results
          onSearchResults(data);  // Pass results back to parent component if needed
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      } else {
        setResults([]);  // Clear results if search query is empty
        onSearchResults([]);  // Clear parent results if search query is empty
      }
    };

    fetchResults();
  }, [searchQuery, onSearchResults]);

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchQuery} 
        onChange={handleSearch} 
        placeholder="Search properties..." 
        className="search-input"
      />
      {results.length > 0 && (
        <div className="search-results">
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.name}</li>  // Adjust according to the data structure
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
