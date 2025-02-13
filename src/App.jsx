/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/contact/contact";
import ErrorPage from "./pages/error/Error";
import AboutPage from "./pages/about/About";

// Layout Compoznent with Preloader

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
