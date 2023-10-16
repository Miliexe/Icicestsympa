import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <ul className="items">
                        <Link className="link" to="/mentions-legales">
                            <li className="item">Mentions légales</li>
                        </Link>
                        <Link className="link" to="/cgv">
                            <li className="item">
                                Conditions générales de vente
                            </li>
                        </Link>
                        <Link className="link" to="/pdc">
                            <li className="item">
                                Politique de confidentialité
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-bot">
                    <ul className="items">
                        <li className="item">Ici c'est sympa © 2022</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
