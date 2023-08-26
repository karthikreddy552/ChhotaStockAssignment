import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import img1 from '../Images/draws-pattern-1.png'
import img2 from '../Images/draws-pattern-2.png'

const PlatFinance = () => {
    return (
        <Box bg={'#171E27'} position={'relative'} borderRadius={'50px'} height={'530px'} w={'90%'} m='50px auto'  display={'flex'} justifyContent={'end'} px={'20px'}>
            <Image src={img1} borderRadius={'15% 0 0 15%'} w={'45%'}/>
            <Image src={img2} borderRadius={'0 15% 15% 0'} w={'45%'}/>
            <Box position={'absolute'} color={'#FFFFFF'} textAlign={'left'} w='50%' top={'50px'} left={'80px'}>
                <Text fontWeight={'700'} fontSize={'40px'}>Connect your platform finances now with InvestPe Gateway</Text>
                <Text my={'20px'}>We help brokers, wealth managers, fund managers & other businesses / startups server their customers better with our suite of modern digital investment stack</Text>
                <Button colorScheme='yellow' borderRadius={'20px'}>Try InvestPe Now</Button>
            </Box>
        </Box>
    );
};

export default PlatFinance;