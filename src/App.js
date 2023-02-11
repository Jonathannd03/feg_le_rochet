import React from "react";
import "./App.css";
import Home from "./component/Home/Home";
import VernetzenElement from "./component/Vernetzen/VernetzenElement";
import UberUns from "./component/Ueber uns/UberUns";
import NavbarElement from "./component/Navbar/NavbarElement";
import KontaktElement from "./component/Kontakt/KontaktElement";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vernetzen" element={<VernetzenElement />} />
        <Route path="/ueber-uns" element={<UberUns />} />
        <Route path="/kontakt" element={<KontaktElement />} />
      </Routes>
    </>
  );
}

export default App;
