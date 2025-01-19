import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Services from "./components/services";

function App() {
  return (
    <div>
      {/*Navbar */}
      <Navbar />
      {/* Other content*/}
      <main>
        <Home />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
