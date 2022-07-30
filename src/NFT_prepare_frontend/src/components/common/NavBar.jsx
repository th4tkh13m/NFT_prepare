import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo_colored.png'
import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react";


export default function NavBar() {
  const { isConnected, principal, activeProvider } = useConnect({  })
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
        <ConnectButton />
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
  .connect-button{
    background-image: linear-gradient(45deg, #ff00aa, #3f35ff);
    color: #fff;
    border-radius: 10px;
    border: 0px;
    padding: 5px 15px;
  }
`
