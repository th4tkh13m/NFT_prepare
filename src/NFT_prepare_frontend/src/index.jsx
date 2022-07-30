import { NFT_prepare_backend } from '../../declarations/NFT_prepare_backend'
import * as React from 'react'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Connect2ICProvider } from '@connect2ic/react'
import { canisterId } from '../declarations'
import { PlugWallet } from '@connect2ic/core/providers/plug-wallet'
import { idlFactory } from '../../declarations/NFT_prepare_backend/NFT_prepare_backend.did'
import '@connect2ic/core/style.css'

const providers = [
  // Either import them from @connect2ic/core
  PlugWallet,
]

const canister = {
  canisterDef = {idlFactory, canisterId}
}
const host = window.location.origin
const App = () => {
  const [name, setName] = React.useState('')
  const [message, setMessage] = React.useState('')

  async function doGreet() {
    const greeting = await NFT_prepare_backend.greet(name)
    setMessage(greeting)
  }

  return <div style={{ fontSize: '30px' }}></div>
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)
