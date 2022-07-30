import { NFT_prepare_backend } from '../../declarations/NFT_prepare_backend'
import * as React from 'react'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/common/NavBar'
import Create from './components/spec/Create'
import Home from './components/spec/Home';

import { Connect2ICProvider, ConnectDialog } from '@connect2ic/react'
import { createClient } from '@connect2ic/core'
import { PlugWallet } from '@connect2ic/core/providers/plug-wallet'
import { canisterId } from '../../declarations/NFT_prepare_backend/index.js'
import { idlFactory } from '../../declarations/NFT_prepare_backend/NFT_prepare_backend.did.js';
import styled from "styled-components";


const canisterDefinitions = {
  superheroes: { idlFactory, canisterId },
}

const client = createClient({
  canisters: canisterDefinitions,
  providers: [new PlugWallet()],
})

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Connect2ICProvider client={client}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
          <Dialog className="wallet_dialog">
            <ConnectDialog />
          </Dialog>
        </Connect2ICProvider>
      </BrowserRouter>
    </>
  )
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)

const Dialog = styled.div`
  position: absolute;
`;