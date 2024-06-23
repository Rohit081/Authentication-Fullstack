import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <Logo alt="My Image" className="App-logo" />
            <nav className='nav'>
               <h2>Welcome to react Authentication app</h2>
            </nav>
        </header>
    )
}

export default Header;