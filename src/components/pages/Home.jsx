import {Stack, Flex, Text, VStack, useBreakpointValue} from "@chakra-ui/react";
import React from "react";

import portada from "../../assets/img/Home.jpg";

function Home() {
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
        w={"full"}
      >
        <Stack align={"flex-start"} maxW={"2xl"} spacing={6}>
          <Text
            color={"white"}
            fontSize={useBreakpointValue({base: "3xl", md: "4xl"})}
            fontStyle="italic"
            fontWeight={100}
            lineHeight={1.2}
          >
            Experimento para acercarnos a personas y lugares que parecen lejanos.
          </Text>
          <Stack direction={"row"} />
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Home;
