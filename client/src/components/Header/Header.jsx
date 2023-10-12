import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link className="link" to="/">
                    <div className="logo">
                        <img src="img/logo-blanc.png" alt="logo de la marque" />
                    </div>
                </Link>
                <div className="navbar">
                    <Link className="link" to="/">
                        <div className="navbar-item">Bijoux</div>
                    </Link>
                    <Link className="link" to="/">
                        <div className="navbar-item">Personnalisation</div>
                    </Link>{' '}
                    <Link className="link" to="/">
                        <div className="navbar-item">Totebags</div>
                    </Link>
                    <Link className="link" to="/">
                        <div className="navbar-item">Stickers</div>
                    </Link>
                    <Link className="link" to="/">
                        <div className="navbar-item">La marque</div>
                    </Link>
                    <Link className="link" to="/">
                        <div className="navbar-item navbar-item--arrow">
                            Aide
                            <KeyboardArrowDownIcon className="icons" />
                        </div>
                    </Link>
                    <Link className="link" to="/">
                        <div className="navbar-item">Contact</div>
                    </Link>
                    <Link className="link" to="/">
                        <div className="navbar-item">Mon compte</div>
                    </Link>{' '}
                    <Link className="link" to="/">
                        <div className="navbar-item">Panier</div>
                    </Link>
                    <div className="icons">
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
