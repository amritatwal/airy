import React, { useState } from 'react';
import Results from '../components/results/results';
import SearchBar from '../components/searchBar/searchBar';

export default function Home({ data }) {
  const [input, setInput] = useState<string>();

  function handleChange(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
        setInput(event.target.value)
        event.preventDefault();
    }
  }

  return (
      <SearchBar handleChange={handleChange}/>
    )
}

