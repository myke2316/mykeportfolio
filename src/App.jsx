import "./App.css";
import AppLayout from "./components/AppLayout";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Changed BrowserRouter to HashRouter
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";
import { AnimatePresence } from "motion/react";

const AnimatedRoutes = () => {
  const location = useLocation(); // Get the current location
  console.log(location);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<Portfolio />} path="/portfolio" />
          <Route element={<Contact />} path="/contact" />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default App;
