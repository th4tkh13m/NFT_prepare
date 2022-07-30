import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_colored.png";

export default function NavBar() {
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
        <button className="btn btn-outline-success" type="submit">Connect Wallet</button>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
