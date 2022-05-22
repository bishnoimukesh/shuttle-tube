import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import {VideoProvider} from "./context/videoContext"

// Call make Server
makeServer();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(

  <StrictMode>
    <BrowserRouter>
    <VideoProvider>
      <ColorModeScript />
      <App />
      </VideoProvider>
    </BrowserRouter>
  </StrictMode>
);