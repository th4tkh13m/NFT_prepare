import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo_colored.png'
import { Connect2ICProvider, ConnectButton } from '@connect2ic/react'
import { createClient } from '@connect2ic/core'
import { PlugWallet } from '@connect2ic/core/providers/plug-wallet'
import { canisterId } from '../../../../declarations/NFT_prepare_backend/index.js'
import { idlFactory } from '../../../../declarations/NFT_prepare_backend/NFT_prepare_backend.did.js'

const canisterDefinitions = {
  superheroes: { idlFactory, canisterId },
}

const client = createClient({
  canisters: canisterDefinitions,
  providers: [new PlugWallet()],
})
const host = window.location.origin

export default function NavBar() {
  const [connected, setConnected] = React.useState(false)
  const isConnecting = () => {}
  return (
    <Nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand" to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/create">
            Create Item
          </Link>
        </div>
        <button
          onClick={() => setConnected(true)}
          className="btn btn-outline-success"
          type="submit"
        >
          Connect Wallet
        </button>
        {connected && (
          <Connect2ICProvider client={client} host={host}>
            <ConnectButton
              dark={false}
              onConnect={() => {
                /* connected */
                console.log(connect)
              }}
              onDisconnect={() => {
                /* disconnected */
              }}
            />
          </Connect2ICProvider>
        )}
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`
