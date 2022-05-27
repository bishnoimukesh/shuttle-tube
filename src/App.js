import React from 'react';
import {ChakraProvider,Box, theme} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import {Home, Login, SignUp, SingleVideo} from "./pages"
import './App.css'

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <Box fontSize="xl" className='layout'>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/signup" element={<SignUp  />} />
          <Route path="/video/:videoId" element={<SingleVideo  />} />
          <Route path="/mock" element={<MockMan  />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
