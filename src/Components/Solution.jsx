import { Box, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Sense from '../Images/Sense.svg'
import dashboard from '../Images/Dashboard.png'
import FD from '../Images/FD.png'
import Booked from '../Images/Booked.png'
import check from '../Images/check.svg'

const Solution = () => {
    return (
        <Box w='85%' m='50px auto'>
            <Box textAlign={'left'} w='40%'>
                <Text color={'#28B570'}>SOLUTION</Text>
                <Text fontWeight={'700'} fontSize={'38px'}>Stay ahead with our Wealth-tech as a service</Text>
            </Box>
            <Box my={'30px'} textAlign={'left'} display={'grid'} gap='20px'>
                <Box color={'#7C59CF'} textAlign={'left'} border={'1px solid #FDE3AF'} bgImage={'linear-gradient(#FDE3AF, #FEF8EC)'} p='20px' borderRadius={'20px'} gridArea={'1/1/1/2'}>
                    <Image src={Sense} w='120px'/>
                    <Text mt={'10px'}>INVESTPE</Text>
                    <Text fontSize={'36px'} fontWeight={'700'}>Why does it make sense to start with us?</Text>
                </Box>
                <Box bgImage={'linear-gradient(#FAFCFD, #FDE3AF)'} border={'1px solid #FDE3AF'} display={'flex'} p='20px' borderRadius={'20px'} gap={'10px'} gridArea={'1/2/1/4'}>
                    <Box fontWeight={'700'} fontSize={'25px'}>
                        <Text color={'#7C59CF'}>We value your precious time</Text>
                        <Text>No regulatory licenses required as we have everything for you to get started.</Text>
                    </Box>
                    <Image src={dashboard} h={'200px'} mt={'16'}/>
                </Box>
                <Box bgImage={'linear-gradient(#FDE3AF, #FEF8EC)'} border={'1px solid #FDE3AF'} p='20px' borderRadius={'20px'}gridArea={'1/5/4/5'}>
                    <Image src={FD} w='64px'/>
                    <Text color={'#7C59CF'} fontSize={'20px'} fontWeight={'500'}>FIXED DEPOSITS</Text>
                    <Text color='#7C59CF' fontSize={'30px'} fontWeight={'700'}>Fully digital FDs for your users</Text>
                    <Text>Offer fixed deposits on your app or website, from multiple banks. Embed a pre-built SDK and go live in weeks.</Text>
                    <Image src={Booked} borderRadius={'15px'}/>
                </Box>
                <Box border={'1px solid #FDE3AF'} p='20px' borderRadius={'20px'} gridArea={'2/1/2/3'}>
                    <Text color='#7C59CF'>MUTUAL FUNDS</Text>
                    <Text color='#7C59CF' fontSize='22px' fontWeight={'700'} my='10px'>Get the complete MF Infra & focus on customer engagement</Text>
                    <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                        <Box className='flex'>
                             <Image src={check}/>
                             <Text>SEBI compliant KYC process</Text>
                        </Box>
                        <Box className='flex'>
                             <Image src={check}/>
                             <Text>Multi-AMC empanelments</Text>
                        </Box>
                        <Box className='flex'>
                             <Image src={check}/>
                             <Text>Transact & Track orders</Text>
                        </Box>
                        <Box className='flex'>
                             <Image src={check}/>
                             <Text>Advanced reporting</Text>
                        </Box>
                    </Box>
                </Box>
                <Box border={'1px solid #FDE3AF'} p='20px' borderRadius={'20px'} gridArea={'3/3/2/4'}>
                    <Text color='#7C59CF'>INDIAN EQUITY</Text>
                    <Text color='#7C59CF' fontSize='22px' fontWeight={'700'} my='10px'>One gateway for all top securities</Text>
                    <Box className='flex'>
                            <Image src={check}/>
                            <Text>Enable stocks, ETFs & expert curated stock baskets in your app</Text>
                    </Box>
                    <Box className='flex'>
                            <Image src={check}/>
                            <Text>Integrates with all major brokers</Text>
                    </Box>
                    <Box className='flex'>
                        <Image src={check} opacity={'0'}/>
                            <Text>Offer expert curated & monitored stock basket solutions</Text>
                    </Box>
                </Box>
            </Box>
            <Divider/>
        </Box>
    );
};

export default Solution;