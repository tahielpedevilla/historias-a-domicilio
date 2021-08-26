import {Box, Stack, Heading, Text, Container, Input, Button, useColorModeValue} from "@chakra-ui/react";
import React from "react";

function Contacto() {
  return (
    <Box>
      <Container columns={{base: 1, md: 2}} maxW={"7xl"} py={{base: 10, sm: 20, lg: 32}} spacing={{base: 10, lg: 32}}>
        <Stack
          bg={useColorModeValue("black", "white")}
          maxW={{lg: "lg"}}
          p={{base: 4, sm: 6, md: 8}}
          rounded={"xl"}
          spacing={{base: 8}}
        >
          <Stack spacing={4}>
            <Heading color={useColorModeValue("white", "black")} fontSize={{base: "2xl", sm: "3xl", md: "4xl"}}>
              Contanos tu historia
            </Heading>
            <Text color={useColorModeValue("white ", "black")} fontSize={{base: "sm", sm: "md"}}>
              ¡Queremos escucharte!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                _placeholder={{
                  color: "gray.500",
                }}
                bg={useColorModeValue("white ", "gray.200")}
                border={0}
                color={"gray.500"}
                placeholder="Nombre"
              />
              <Input
                _placeholder={{
                  color: "gray.500",
                }}
                bg={useColorModeValue("white ", "gray.200")}
                border={0}
                color={"gray.500"}
                placeholder="nombre@ejemplo.com"
              />
              <Input
                _placeholder={{
                  color: "gray.500",
                }}
                bg={useColorModeValue("white ", "gray.200")}
                border={0}
                color={"gray.500"}
                placeholder="+54 (___) __-___-___"
              />
            </Stack>
            <Button
              _hover={{color: "white", bg: "blackAlpha.700"}}
              bg={useColorModeValue("gray.300", "black")}
              mt={8}
              w={"full"}
            >
              Enviar
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Contacto;
