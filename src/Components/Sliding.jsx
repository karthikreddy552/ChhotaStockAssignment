import { Box, Divider, Image } from '@chakra-ui/react';
import React from 'react';
import SlidingImg from '../Images/Sliding.png'
const Sliding = () => {
    return (
        <div>
            <Box> 
                <Image src={SlidingImg}/>
            </Box>
            <Divider/>
        </div>
    );
};

export default Sliding;