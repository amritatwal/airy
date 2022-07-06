import React from 'react';

// Set the shape of Location

function Results ({airQuality}) {
    return (
        <>
            <p>{airQuality.name}</p>
            <p>{airQuality.concentration}</p>
            <p>{airQuality.country}</p>
            <p>{airQuality.category}</p>

        </>
    )
}

export default Results