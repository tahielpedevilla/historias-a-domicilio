import React from "react";
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Container,
  Link,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import {FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa";

function Footer() {
  const fecha = new Date().getFullYear();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <Box bg={useColorModeValue("white", "black")}>
      <Container
        align={{base: "center", md: "center"}}
        as={Stack}
        direction={{base: "column", md: "row"}}
        justify={{base: "center", md: "space-between"}}
        maxW={"6xl"}
        py={4}
        spacing={4}
      >
        <Text color={useColorModeValue("black", "white")} px={4}>
          © Historias a domicilio. {fecha}.
        </Text>

        <Stack direction={"row"} spacing={6}>
          <Button variant="buttonNav" onClick={onOpen}>
            Quiero más historias
          </Button>
          <Link isExternal href="https://twitter.com/leocarriazo">
            <IconButton>
              <FaTwitter />
            </IconButton>
          </Link>
          <IconButton>
            <Link isExternal href="https://youtube.com/channel/UCdo6FPeQSahxqIel-jxzGdw">
              <FaYoutube />
            </Link>
          </IconButton>
          <IconButton>
            <Link isExternal href="https://www.instagram.com/historiasadomicilio_/">
              <FaInstagram />
            </Link>
          </IconButton>
        </Stack>

        {/* Modal */}
        <Modal finalFocusRef={finalRef} initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="black" borderRadius="0">
            {/* <ModalHeader fontStyle="italic" fontWeight="100">
              Quiero más historias
            </ModalHeader> */}
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} _focus={{boxShadow: "0"}} borderRadius="0" placeholder="Email" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} variant="outline">
                Suscribirme
              </Button>
              <Button variant="outline" onClick={onClose}>
                Volver
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}

export default Footer;
