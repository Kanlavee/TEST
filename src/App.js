import Analytics from "./component/Analytics";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import React from "react";
import News from "./component/News";
import Card from "./component/Card";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <News></News>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
 
  
}

export default App;
