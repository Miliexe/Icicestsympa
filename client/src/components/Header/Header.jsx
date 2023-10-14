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
                    <ul className="items">
                        <Link className="link" to="/">
                            <li className="item">Bijoux</li>
                        </Link>
                        <Link className="link" to="/">
                            <li className="item">Personnalisation</li>
                        </Link>{' '}
                        <Link className="link" to="/">
                            <li className="item">Totebags</li>
                        </Link>
                        <Link className="link" to="/">
                            <li className="item">Stickers</li>
                        </Link>
                        <Link className="link" to="/">
                            <li className="item">La marque</li>
                        </Link>
                        <Link className="link" to="/">
                            <li className="item item--arrow">
                                Aide
                                <KeyboardArrowDownIcon className="icons" />
                            </li>
                        </Link>
                        <Link className="link" to="/">
                            <li className="item">Contact</li>
                        </Link>
                        <Link className="link" to="/">
                            <li className="item">Mon compte</li>
                        </Link>{' '}
                        <Link className="link" to="/">
                            <li className="item">Panier</li>
                        </Link>
                        <li className="icons">
                            <SearchIcon />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
