import React from 'react';
import { Box, Text, Flex, Image} from '@chakra-ui/react';
import Subheader from '../../text/subheader/subheader';
import icons from '../../../../libs/data/icons';

function Overview({ category }) {
    const src = icons.find(icon => icon.category === category.toLowerCase()).src;
    console.log(src)
    return (
        <>
            <Box
            p=".5em"
            >
                <Subheader text={"Overview"} />
                <Image src={src} alt={"hello"}/>
            </Box>
        </>
    )
}

export default Overview;