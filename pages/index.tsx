import React, { useState, useEffect } from 'react';
import Results from '../src/components/results/results';
import SearchBar from '../src/components/searchBar/searchBar';

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
          "x-api-key": "bea4eac02dcf0f3b8f6c1e7d1e8b261775a89e3f49e76938b60c037fed0bba13",
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
