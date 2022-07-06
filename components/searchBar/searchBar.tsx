import React from 'react';
import { Input } from '@chakra-ui/react'

function SearchBar({handleChange}) {
    return (
        <>
         <Input variant='outline' placeholder='Search' onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => handleChange(event)}/>  
        </>
    )
}

export default SearchBar