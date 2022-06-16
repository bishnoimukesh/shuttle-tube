import React from 'react';
import {ChakraProvider,Box, theme} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import {Home, Login, SignUp, SingleVideo, LikePage, WatchLater, History, Playlist, PlaylistItem} from "./pages"
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
          <Route path="/likedvideo" element={<LikePage  />} />
          <Route path="/watchlatervideo" element={<WatchLater  />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:playlistId" element={<PlaylistItem />} />
          <Route path="/history" element={<History  />} />
          <Route path="/mock" element={<MockMan  />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
