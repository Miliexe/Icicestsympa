import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ id, cover, title, price }) => {
    return (
        <article className="card">
            <Link to={`/bijoux/${id}`} className="card link">
                <img className="card__img" src={cover} alt={`produit: ${id}`} />
            </Link>
            <h3 className="card__title">{title}</h3>
            <span className="card__price">{price}</span>
        </article>
    )
}

export default Card
