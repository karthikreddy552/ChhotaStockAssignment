import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Protection from '../Images/Protection.png'
import Tracking from '../Images/Tracking.png'
import Flexibility from '../Images/Flexibility.png'
import Easiness from '../Images/Easiness.png'

const Features = () => {
    return (
        <Box display={'flex'} w='80%' m={'50px auto'}>
            <Box w='50%' textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Text color={'#28B570'} fontSize={'24px'}>FEATURES</Text>
                <Text fontSize={'42px'} fontWeight={'700'}>Launch the most Engaging Invest-Tech Solutions</Text>
                <Text color='#777777'>We offer a suite of B2B Invest-tech solutions, that are cost-effective way to offer an engaging investment experience to your customers, with a faster time to market</Text>
                <Box >
                    <Button colorScheme='yellow' borderRadius={'20px'} mr={'20px'}>Get Started</Button>
                    <Button variant={'link'}>Learn More</Button>
                </Box>
            </Box>
            <Box display={'flex'} gap={'20px'} w='50%' flexWrap={'wrap'}>
                 <Box className='features'>
                    <Text>Protection</Text>
                    <Image src={Protection}/>
                    <Text>Data protection guarentees</Text>
                 </Box>
                 <Box className='features'>
                    <Text>Tracking</Text>
                    <Image src={Tracking}/>
                    <Text>Track all your users financial transactions</Text>
                 </Box>
                 <Box className='features'>
                    <Text>Flexibility</Text>
                    <Image src={Flexibility}/>
                    <Text>Custom made for your requirements</Text>
                 </Box>
                 <Box className='features'>
                    <Text>Easiness</Text>
                    <Image src={Easiness}/>
                    <Text>Go-to market in less than 7 days</Text>
                 </Box>
            </Box>
        </Box>
    );
};

export default Features;