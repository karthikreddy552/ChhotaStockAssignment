import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import InvestPeLogo from "../Images/InvestPeLogo.png";
import GooglePlay from "../Images/GooglePlay.png";
import facebook from "../Images/facebook.png";
import youtube from "../Images/youtube.png";
import Instagram from "../Images/Instagram.png";
import twitter from "../Images/twitter.png";

const Footer = () => {
  return (
    <Box
      bg={"#171E27"}
      display={"flex"}
      flexDirection={"column"}
      fontFamily={"Gilroy"}
      p="20px 40px"
      gap={'50px'}
    >
      <div>
        <Image src={InvestPeLogo} />
      </div>
      <Box
        color='#979797'
        display={"flex"}
        gap={"70px"}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        textAlign={"left"}
        padding={"0 50px"}
        lineHeight={"27px"}
        fontSize={"18px"}
      >
        <Box>
          <Text fontWeight={"700"} fontSize={"20px"} mb={'10px'} color={"#D9D9D9"}>
            Contact Us
          </Text>
          <Text>8089225625</Text>
          <Text>contact@chootastock.com</Text>
        </Box>
        <Box>
          <Text fontWeight={"700"} fontSize={"20px"} mb={'10px'} color={"#D9D9D9"}>
            Company
          </Text>
          <Text>About Us</Text>
          <Text>Privacy policy</Text>
          <Text>Terms and Conditions</Text>
        </Box>
        <Box>
          <Text fontWeight={"700"} fontSize={"20px"} mb={'10px'} color={"#D9D9D9"}>
            Quick Links
          </Text>
          <Text>Home</Text>
          <Text>Gateway</Text>
          <Text>Blog</Text>
        </Box>
        <Box>
          <Text fontWeight={"700"} fontSize={"20px"} mb={'10px'} color={"#D9D9D9"}>
            Download the App Now!
          </Text>
          <Image src={GooglePlay} />
        </Box>
        <Box>
          <Text fontWeight={"700"} fontSize={"20px"} mb={'10px'} color={"#D9D9D9"}> 
            Find Us On
          </Text>
          <Box display={'flex'} gap={'30px'}>
            <Image src={facebook} w='40px' h='33px' />
            <Image src={youtube} w='40px' h='33px'/>
            <Image src={Instagram} w='40px' />
            <Image src={twitter} w='40px' h='33px'/>
          </Box>
        </Box>
      </Box>

      <Box
        color='#979797'
        textAlign={"left"}
        padding={"10px 50px"}
        lineHeight={"40px"}
        fontSize={"16px"}
      >
        <Text>
          © 2022 Chhotastock Technologies Private Limited. All rights reserved.
          CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.
        </Text>
        <Text>
          Chhotastock Technologies builds platforms & investment products to
          invest better in Indian investment asset classes. Investing in
          Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read
          all the related documents before investing. Investors should consider
          all risk factors and consult their financial advisor before investing
        </Text>
        <Text>
          Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR
          Layout Sector 6, Bengaluru, Karnataka - 560102, India
        </Text>
        <Text>
          For any query / feedback / clarifications, email at
          contact@chhotastock.com
        </Text>
        <Text>
          All Investment ideas, model portfolios & advisory are built by SEBI
          Registered Investment advisors (RIAs) & Chhotastock only facilitates
          investments in such baskets, portfolios.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
