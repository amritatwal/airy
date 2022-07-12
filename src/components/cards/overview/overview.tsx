import React from 'react';
import { Box, Text, Flex, Image} from '@chakra-ui/react';
import Subheader from '../../text/subheader/subheader';
import icons from '../../../../libs/data/icons';

function Overview({ category }) {
    const src = icons.find(icon => icon.category === category.toLowerCase()).src;
    return (
        <>
            <Box
                p='.5em'
            >
                <Subheader text={"Overview"} />
                <Flex
                    p={{base: '1em'}}
                    flexDirection='row'
                    alignItems='center'
                >
                    <Image src={src} alt={"hello"} w={{base: '2em', md: '5em'}}/>
                </Flex>
            </Box>
        </>
    )
}

export default Overview;