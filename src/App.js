import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Review from "./routes/review";
import { Home } from "./routes/Home";
import Footer from "./components/footer";
import About from "./routes/about"
import MapComponent from "./routes/MapComponent";

export default function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/service":
      component = <Review />
      break
    case "/about":
      component = <About />
      break
      case "/destination":
        component = <MapComponent />
        break

  }
  return (
    <>
      <Navbar />
      {component}
      <Footer />
    </>
  )
}

