import * as React from 'react'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { NFT_prepare_backend } from '../../declarations/NFT_prepare_backend';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Create from "./components/spec/Create";
import Home from "./components/spec/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)
