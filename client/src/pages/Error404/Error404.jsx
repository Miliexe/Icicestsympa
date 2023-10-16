import { NavLink } from 'react-router-dom'
import './Error404.scss'

function Error404() {
    return (
        <main className="error404">
            <h1 className="error404__title">404</h1>
            <p className="error404__description">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" className="error404__backToHome">
                <p>Retourner sur la page d’accueil</p>
            </NavLink>
        </main>
    )
}

export default Error404
