import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Nfts from "./Pages/Nfts/Nfts";
import { Main } from "./Main/Main";
import Contact from "./Pages/Contact/Contact";
import Prueba from "./Pages/Prueba/Prueba";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/NFTS" element={<Nfts />} />
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prueba" element={<Prueba />} />

      </Routes>
    </AnimatePresence>
  );
}
