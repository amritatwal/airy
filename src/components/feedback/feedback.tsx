import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Overview from '../cards/overview/overview';

function Feedback({ category, colour}) {
    console.log("hello", category)
    return (
        <>
            <Flex
                px={{ base: '1em', md: '15em' }}
                my='1em'
                flexDirection='column'
            >
                <Flex
                    flexDirection='row'
                >
                    <Box
                        mr='1em'
                        w='50%'
                        h={{ base: '6.5em', md: '10em' }}
                        borderRadius='12px'
                        bg={colour}
                        opacity='.7'
                    >
                        <Overview category={category} />
                    </Box>
                    <Box
                        w='50%'
                        h={{ base: '6.5em', md: '10em' }}
                        borderRadius='12px'
                        bg='#F9F9F9'
                    ></Box>
                </Flex>
                <Flex
                    py='1em'
                    flexDirection='row'
                    justifyContent={'space-between'}
                >
                    <Box

                        w={{ base: '6.5em', md: '20em' }}
                        h={{ base: '6.5em', md: '10em' }}
                        borderRadius='12px'
                        bg='#F9F9F9'
                    ></Box>
                    <Box

                        w={{ base: '6.5em', md: '20em' }}
                        h={{ base: '6.5em', md: '10em' }}
                        borderRadius='12px'
                        bg='#F9F9F9'
                    ></Box>
                    <Box
                        w={{ base: '6.5em', md: '20em' }}
                        h={{ base: '6.5em', md: '10em' }}
                        borderRadius='12px'
                        bg='#F9F9F9'
                    ></Box>
                </Flex>                <Box
                    h={{ lg: '7em' }}
                    borderRadius='12px'
                    bg='#F9F9F9'
                ></Box>
            </Flex>
        </>
    )
}

export default Feedback;