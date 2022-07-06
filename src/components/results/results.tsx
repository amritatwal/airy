import React from 'react';
import Image from 'next/image';
import { Box, Text, Flex} from '@chakra-ui/react';

function Results({ airQuality }) {

    return (
        <>
            <Flex
                color='white'
                alignItems='center'
                flexDirection='column'
                my='1.5em'
            >
                <Box
                                    mb='1em'
                    display='flex'
                    flexDirection='row'
                ><Box px='.3em'>
                        <Image
                            width={25}
                            height={25}
                        src='https://svgshare.com/i/itr.svg' alt='location' />
                </Box>
                    <Text
                                            fontSize='1em'
                        textTransform='uppercase'
                        letterSpacing='1.5px'
                    fontWeight='800'
                    >{airQuality.name}, {airQuality.country}</Text>
                </Box>

<Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='50%'
                border={'solid 3px white'}
                w={{ base: '8.5em' }}
                    h={{ base: '8.5em' }}
                    mb='1.5em'
            >
                <Text
                    fontSize={{ base: '4em'}}
                    >{Math.round(airQuality.concentration)}</Text>
                </Box>
                <Text
                     textTransform='uppercase'
                     letterSpacing='1.5px'
                 fontWeight='800'
                    fontSize={{ base: '1.5em'}}
                >{airQuality.category}</Text>
            </Flex>
        
        </>
    )
}

export default Results;