import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import Account from "components/Account";
import NativeBalance from "components/NativeBalance";
import Address from "./Address/Address";
import Blockie from "./Blockie";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <Box  p={5}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Image src='images/logo4.svg' w={250}/>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems={'center'}>
                 {/* <NativeBalance />
                <Account/> */}

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Blockie currentWallet scale={4} />
                </MenuButton>
             
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                      <Blockie currentWallet scale={5} />
                    {/* <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'} 
                    />*/}
                  </Center>
                  <br />
                  <Center>
                    <Address size={8} copyable style={{ fontSize: "12px" }} />
                  </Center>
                      <Center>
                    <NativeBalance />
                  </Center>
                  <br />
                  {/* <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    
  );
}
