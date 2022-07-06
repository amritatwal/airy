import React from 'react';
import { Input } from '@chakra-ui/react'

function SearchBar({handleChange}) {
    return (
        <>
            <Input
                w={{md:'40em'}}
                variant='outline' placeholder='Search by city...'
                color='grey'
                onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => handleChange(event)} />  
        </>
    )
}

export default SearchBar