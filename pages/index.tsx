import React, { useState, useEffect } from 'react';
import Results from '../src/components/results/results';
import SearchBar from '../src/components/searchBar/searchBar';
import API_KEY from '../config';

export default function Home() {
  const [input, setInput] = useState<string>();
  const [postcode, setPostcode] = useState<string>();
  const [country, setCountry] = useState<string>();

  function handleChange(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
        setInput(event.target.value)
        event.preventDefault();
    }
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.ambeedata.com/latest/by-city?city=${input}`, {
        "method": "GET",
        "headers": {
          "x-api-key": `${API_KEY}`,
          "Content-type": "application/json"
        }
      });
      const data = await res.json()
      console.log(data.stations[0])
    }
    fetchData() 
  }, [input]);


  return (
    <SearchBar handleChange={handleChange}/>
  )
}
