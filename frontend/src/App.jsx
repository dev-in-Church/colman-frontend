import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
