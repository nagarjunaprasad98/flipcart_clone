import React from "react";
import "./App.css";

import { Header } from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import HomeElectronics from "./Components/HomeComponents/HomeElectronics";
 
function App() {
  return (
    <>
      <Header />
      <Carousel/>
      <HomeElectronics/>
    </>
  );
}

export default App;
