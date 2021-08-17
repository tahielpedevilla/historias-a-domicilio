import React from "react";
import {Box, Flex, useBreakpointValue, useColorModeValue, Text, Button, Stack} from "@chakra-ui/react";

function NavBar() {
  return (
    <Box>
      <Flex
        align={"center"}
        bg={useColorModeValue("white", "black")}
        borderBottom={1}
        borderColor={useColorModeValue("white", "black")}
        borderStyle={"solid"}
        color={useColorModeValue("black", "white")}
        minH={"60px"}
        px={{base: 4}}
        py={{base: 2}}
      >
        <Flex display={{base: "flex", md: "none"}} flex={{base: 1, md: "auto"}} ml={{base: -2}} />
        <Flex flex={{base: 1}} justify={{base: "center", md: "start"}}>
          <Text
            as={"a"}
            color={useColorModeValue("black", "white")}
            cursor="pointer"
            fontFamily={"heading"}
            fontSize="4xl"
            fontWeight={700}
            href={"/"}
            ml={3}
            my={-2}
            textAlign={useBreakpointValue({base: "center", md: "left"})}
          >
            H
          </Text>
        </Flex>
        <Stack direction={"row"} flex={{base: 1, md: 0}} justify={"flex-end"} mr={4} spacing={6}>
          <Button as={"a"} color={useColorModeValue("black", "white")} fontSize={"md"} href={"/personas"}>
            Personas
          </Button>
          <Button as={"a"} color={useColorModeValue("black", "white")} fontSize={"md"} href={"/cambios"}>
            Cambios
          </Button>
          <Button as={"a"} color={useColorModeValue("black", "white")} fontSize={"md"} href={"/contacto"}>
            Contacto
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default NavBar;
