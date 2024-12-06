import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (query) {
            axios
                .get(`http://localhost:3001/suggestions?prefix=${query}`)
                .then((response) => setSuggestions(response.data))
                .catch((error) => console.error('Error fetching suggestions:', error));
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
