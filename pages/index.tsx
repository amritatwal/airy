import React, { useState, useEffect } from 'react';
import Results from '../src/components/results/results';
import SearchBar from '../src/components/searchBar/searchBar';
import API_KEY from '../config';

// Set the shape of Location
type Location = {
  name: string, 
  country: string, 
  concentration: number,
  category: string
};

export default function Home() {
  const [input, setInput] = useState<string>();
  const [airQuality, setAirQuality] = useState<Location>();

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
      const result = {
        name: data.stations[0].placeName, 
        country: data.stations[0].countryCode, 
        concentration: data.stations[0].aqiInfo.concentration,
        category: data.stations[0].aqiInfo.category
      }
      setAirQuality(result)
    }
    fetchData() 
  }, [input]);

  return (
    <>
      <SearchBar handleChange={handleChange} />
      {airQuality ? <Results airQuality={airQuality} /> : <></>}
    </>
    
  )
}
