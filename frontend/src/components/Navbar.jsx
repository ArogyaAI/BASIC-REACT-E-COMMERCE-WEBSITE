import { Text,Container, Flex, HStack, Button, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import {PlusSquareIcon} from '@chakra-ui/icons'
import {IoMoon} from 'react-icons/io5'
import {LuSun} from 'react-icons/lu' 

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <div>
        <Container maxW={"1140px"} px={4} >
            <Flex 
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
            >
                <Text
                bgGradient={'linear(to-r, cyan.400, blue.400)'}
                bgClip={'text'}
                textAlign={"center"}
                textTransform={"uppercase"}
                
                fontSize={{base:"22", sm:"28"}}
                fontWeight={'extrabold'}
                >
                <Link to={'/homepage'}>Product Store </Link>
                </Text>

                <HStack spacing={2} alignItems={"center"} >
                    <Link to={"/createpage"}>
                    <Button>
                        <PlusSquareIcon fontSize={20} />
                    </Button>
                    <Button onClick={toggleColorMode} >
                        {colorMode==="light" ? <IoMoon/> :<LuSun/>}
                    </Button>
                    </Link>
                </HStack>
            </Flex>

        </Container>
    </div>
  )
}

export default Navbar