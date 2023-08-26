import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Kotak from '../Images/Kotak.png'
import AngleOne from '../Images/AngleOne.png'
import upstox from '../Images/Upstox.png'
import AMFI from '../Images/AMFI.png'
import Lendbox from '../Images/Lendbox.png'
import LiquiLoans from '../Images/LiquiLoans.png'
import Euitas from '../Images/Euitas.png'
import Simply from '../Images/Simply.png'
import Jupiter from '../Images/Jupiter.png'

const Partners = () => {
    return (
        <Box color='#777777' w='80%' m='50px auto'>
            <Box display={'flex'} textAlign={'left'}>
                <Text fontSize='30px'>Some partners who make InvestPe products possible—</Text>
                <Box display={'flex'} flexWrap={'wrap'} className='partners' gap={'20px'}>
                   <Image src={Kotak}/>
                   <Image src={AngleOne}/>
                   <Image src={upstox}/>
                   <Image src={AMFI}/>
                   <Image src={Lendbox}/>
                   {/* <Image src={LiquiLoans} w={'100px'} h='auto'/> */}
                   <Image src={Euitas}/>
                </Box>
            </Box>
            <Box display={'flex'} textAlign={'left'} my='30px'>
              <Box fontSize='30px' display='flex'>
                <Text w='50%'>...and a few of the businesses building some incredible solutions with InvestPe</Text>
                <Box display={'flex'} gap='20px'>
                    <Box bg='#B1B1B1' borderRadius={'20px'} p='20px' h='80px'>
                    <Image src={Simply} w='100px'/></Box>
                    <Box bg='#B1B1B1' borderRadius={'20px'} p='20px' h='80px'>
                    <Image src={Jupiter} w='100px'/></Box>
                </Box>
              </Box>
            </Box>
        </Box>
    );
};

export default Partners;