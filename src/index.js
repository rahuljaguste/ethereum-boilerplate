import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import QuickStart from "components/QuickStart";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App isServerInfo />
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <QuickStart /> */}
      </div>
    );
  }
};

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Application />
  </ChakraProvider>,
  document.getElementById("root")
);
