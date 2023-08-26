import { Box, Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import MutualFunds from '../Images/MutualFunds.png'
import Equity from '../Images/Equity.png'
import Gold from '../Images/Gold.png'
import fixedDeposite from '../Images/FixedDeposite.png'

const WorkWithUs = () => {
    return (
        <Box w={'90%'} m={'100px auto'} bgImage={'linear-gradient(#FEC175, #FB9077)'} borderRadius={'50px'} textAlign={'left'} p='20px 50px 100px 50px'>
            <Box my={'20px'}>
                <Text fontWeight={'700'} fontSize={'42px'}>How would you like to work with us?</Text>
                <Text w={'40%'}>Tell us more about yourself, and we'll reach out to you as soon as possible.</Text>
            </Box>
            <form>
                <FormControl display={'flex'} justifyContent={'space-between'} pr={'20px'} m={'20px 0 -40px 0'}>
                    <Box minW={'30%'} mr={'50px'}>
                        <FormLabel>Work Email</FormLabel>
                        <Input type='email' size={'lg'}  placeholder="abc@xyz.com" _placeholder={{ opacity: 0.4, color: 'inherit' }} variant={'filled'}/>
                        <br/>
                        <br/>
                        <br/>
                        <FormLabel>Company Name</FormLabel>
                        <Input type='text' size={'lg'} variant={'filled'}/>
                        <br/>
                        <br/>
                        <br/>
                        <FormLabel>Mobile Number</FormLabel>
                        <Input type='number' size={'lg'} variant={'filled'}/>
                    </Box>
                    <Box w={'70%'}>
                        <FormLabel>Which products are you interested in?</FormLabel>
                        <Box display={'flex'} gap={'20px'} flexWrap={'wrap'}>
                            <Box className='intersted'>
                                <Text>Mutual Funds</Text>
                                <Text>E2E infrastructure for mutual fund investing</Text>
                                <Image src={MutualFunds}/>
                            </Box>
                            <Box className='intersted'>
                                <Text>Indian Equity</Text>
                                <Text>Stock gateway & stock baskets</Text>
                                <Image src={Equity}/>
                            </Box>
                            <Box className='intersted'>
                                <Text>Digital Gold</Text>
                                <Text>Buy & Sell digital gold hassle free</Text>
                                <Image src={Gold}/>
                            </Box>
                            <Box className='intersted'>
                                <Text>Fixed Deposits</Text>
                                <Text>Book FDs in 1click w/o opening a bank ac</Text>
                                <Image src={fixedDeposite}/>
                            </Box>
                        </Box>
                    </Box>
                </FormControl>
                <Box textAlign={'end'} mr={'40px'}>
                    <Button borderRadius={'20%'} bg={'black'} color={'white'} _hover={{bg:'white',color:'black'}}>Submit</Button>
                </Box>
            </form>
            
        </Box>
    );
};

export default WorkWithUs;