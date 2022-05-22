import React from 'react';
import {ChakraProvider,Box, theme} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import {Home} from "./pages/Home"

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <Box fontSize="xl">
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/mock" element={<MockMan  />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
