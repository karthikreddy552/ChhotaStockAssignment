import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import frame1 from '../Images/Frame1.png'

const First = () => {
    return (
        <Box mb={'100px'}>
            <Image src={frame1}/>
        </Box>
    );
};

export default First;