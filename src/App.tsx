import theme from "./theme/theme";
import { Button, ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>ああああ</p>
    </ChakraProvider>
  );
}
