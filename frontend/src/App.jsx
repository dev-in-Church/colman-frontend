import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      {/*Navbar */}
      <Navbar />
      {/* Other content*/}
      <main className="p-4 ">
        <h1 className="text-2xl font-bold ">Welcome to Colman</h1>
        <p className="mt-2 text-gray-700 ">
          This is a Software developmant company.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
