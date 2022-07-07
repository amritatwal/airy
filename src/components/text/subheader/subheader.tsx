import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

function Subheader({text}) {
    return (
        <Text
            color="#494949"
            fontSize={{ base: "1em", md: ".8em" }}
            fontWeight="700"
            textTransform="uppercase"
        >{text}</Text>
    )
}

export default Subheader;