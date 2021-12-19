import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Box,
  HStack,
  Container,
  Vstack,
  SimpleGrid,
  useColorModeValue,
  Heading,
  StackDivider,
  List,
  ListItem,
} from '@chakra-ui/react';
import Navbar from "components/Navbar";


const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const {activeItem, setActiveItem} = useState('home')

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  const handleItemClick = (e, { name }) => setActiveItem(name)
  return (
     <Flex 
     w={'full'}
      h={'100vh'}
       backgroundImage={
        'images/background.jpg'
        // https://images.unsplash.com/photo-1639759022772-55dcc7a9f745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
        // 'url(https://images.unsplash.com/photo-1639759022772-55dcc7a9f745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      px={'5%'}
      pt={'5%'}

      justifyContent={'center'}
      >
      <Flex
        direction={'column'}
        
        // spacing={{ base: 8, md: 10 }}
        // py={{ base: 18, md: 24 }}
        bg={'white'}
        borderRadius={{base: 5, md: 10, lg: 20, xl: 25}}
        maxW={'1350px'}
        maxH={['750px','900px','1000px','600px']}
        
        >
         {/* <Flex justifyContent={'flex-end'} alignItems={'center'} >

            <NativeBalance />
            <Account />
        </Flex> */}

        <Navbar />
          
        <Flex bg={'white'}>
             <Stack direction={['column','column','column','row']}>
               
              <Image src='images/illustration.jpg' p={'5%'} pb={[0,0,'5%']}/>
              <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} p={10} pt={[0,0,10]} >
                <Heading as={'h1'} textAlign={'center'} style={{fontFamily:'Roboto'}} textColor={'#1c9cff'}>
                  Fund the Web3 future.
                </Heading>
              <Text
                lineHeight={1.2}
                textAlign={'center'}
                fontWeight={500}
                >
                Join the moment of Web3 by contributing towards development of the decentralized ecosystem.
              </Text>
                      <Wallet />
                </Stack>
              </Stack>
            </Flex>
              <Flex justifyContent={'center'} alignItems={'center'}>
            



        <Text style={{ display: "block" }} textColor={'#1c9cff'}>
          Copyright © 2021 CrowdFund
        </Text>
        </Flex>
      </Flex>

     
    </Flex>
  );
};



export default App;


