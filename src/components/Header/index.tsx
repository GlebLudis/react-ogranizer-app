import React from 'react';
import './styles.css';
import Container from "../Basic/Container";

/**
 * Renders header/appbar on the top of the page
 */


function Header() {
    return (
        <header className="appbar-root">
            <Container className="appbar-container">
                <h1 className="appbar-title">
                    ORGANIZER
                </h1>
            </Container>
        </header>
    )
}

export default Header;
