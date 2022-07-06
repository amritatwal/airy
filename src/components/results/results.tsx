import React from 'react';
import { Box, Text, Flex} from '@chakra-ui/react';

function Results({ airQuality }) {
    


    return (
        <>
            <Flex
                flexDirection='column'
                my='2em'
            >

<Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                color='white'
                borderRadius='50%'
                border={'solid 3px white'}
                w={{ base: '10em' }}
                h={{ base: '10em' }}
            >
                <Text
                    fontSize={{ base: '4em'}}
                >{Math.round(airQuality.concentration)}</Text>
                </Box>
                <Box
                                    mt='2em'
                    display='flex'
                    flexDirection='row'
                >
                <Text>{airQuality.name}, {airQuality.country}</Text>
                </Box>
            </Flex>
        
        </>
    )
}

export default Results;