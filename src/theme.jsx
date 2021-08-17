import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "Kanit",
    body: "Kanit",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // We can add a new visual variant
      variants: {
        outline: {
          color: "white",
          borderColor: "white",
          borderRadius: "0",
          fontWeight: "light",
          textTransform: "uppercase",
          letterSpacing: "1px",
          _hover: {
            color: "black",
            bg: "white",
          },
        },
      },
    },
  },
});

export default theme;
