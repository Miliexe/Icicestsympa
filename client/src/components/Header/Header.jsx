import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <Link className="link" to="/">
                    <div className="logo">
                        <img src="img/logo-blanc.png" alt="logo de la marque" />
                    </div>
                </Link>
                <nav className="navbar">
                    <ul className="items">
                        <Link className="link" to="/bijoux">
                            <li className="item">Bijoux</li>
                        </Link>
                        <Link className="link" to="/personnalisation">
                            <li className="item">Personnalisation</li>
                        </Link>{' '}
                        <Link className="link" to="/totebags">
                            <li className="item">Totebags</li>
                        </Link>
                        <Link className="link" to="/stickers">
                            <li className="item">Stickers</li>
                        </Link>
                        <Link className="link" to="/la-marque">
                            <li className="item">La marque</li>
                        </Link>
                        <Link className="link" to="/aide">
                            <li className="item item--arrow">
                                Aide
                                <KeyboardArrowDownIcon className="icons" />
                            </li>
                        </Link>
                        <Link className="link" to="/contact">
                            <li className="item">Contact</li>
                        </Link>
                        <Link className="link" to="/mon-compte">
                            <li className="item">Mon compte</li>
                        </Link>{' '}
                        <Link className="link" to="/panier">
                            <li className="item">Panier</li>
                        </Link>
                        <li className="icons">
                            <SearchIcon />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
