import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Services from "./components/services";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog";

function App() {
  return (
    <div>
      {/*Navbar */}
      <Navbar />
      {/* Other content*/}
      <main>
        <Home />
        <Services />
        <Blog />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
