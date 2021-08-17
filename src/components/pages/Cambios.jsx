import {Flex, Text, VStack, useBreakpointValue} from "@chakra-ui/react";
import React from "react";

import portada from "../../assets/img/Cambios.jpg";

function Cambios() {
  return (
    <Flex
      backgroundImage={portada}
      backgroundPosition={"center center"}
      backgroundSize={"cover"}
      h={"100vh"}
      w={"full"}
    >
      <VStack
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        justify={"center"}
        px={useBreakpointValue({base: 4, md: 8})}
        w={"50%"}
      >
        <Text
          color={"white"}
          fontSize={useBreakpointValue({base: "3xl", md: "4xl"})}
          fontStyle="italic"
          fontWeight={80}
          lineHeight={1.2}
        >
          Pronto encontrarás historias de personas que trabajan por cambiar el mundo.
        </Text>
      </VStack>
    </Flex>
  );
}
// Pronto encontrarás historias de gente común, escucharnos puede ser algo revolucionario.

export default Cambios;
