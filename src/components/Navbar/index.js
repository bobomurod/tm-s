import React from 'react';
import {Nav, NavbarContainer, NavLogo} from "./NavbarElements";

const  Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                     <NavLogo to='/'>dolla</NavLogo>
                    <h1>Hey</h1>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default  Navbar;