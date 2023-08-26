import React from "react";
import InvestPeLogo from "../Images/InvestPeLogo.png";
import { Box, Image, Text } from "@chakra-ui/react";
import Vector from '../Images/Vector.png' 

const Navbar = () => {
  return (
    <Box bg={"#171E27"} color={"white"} display={'flex'} textAlign={'center'} justifyContent={'space-around'}>
      <Box display={'flex'} alignItems={'center'}>
        <div>
          <Image src={InvestPeLogo} w='318px'/>
        </div>
        <div>
          <Box display={'flex'} bg='#FDECEC' borderRadius={'20px'} p='5px 10px' gap={'5px'} alignItems={'center'} >
            <Text color={'#F05656'} fontFamily={'Inter'} fontSize={'24px'} lineHeight={'29.05px'}>Gateway</Text>
            <Box bg={'#F05656'} borderRadius={'50%'} w={'15px'} h={'15px'}></Box>
          </Box>
        </div>
      </Box>
      <Box display={'flex'} gap={'50px'} alignItems={'center'} fontSize='30px'>
        <Box display={'flex'} fontWeight={'400'} gap={'10px'} alignItems='center'>
            <Text lineHeight={'36.31px'}>Products</Text>
            <Image src={Vector} w='22px' h='10px'/>
        </Box>
        <div>
            <Text>AboutUs</Text>
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
