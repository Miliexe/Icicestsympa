import React from 'react'
import Data from '../../data/data.json'
import Card from '../Card/Card'
import './Gallery.scss'

const Gallery = () => {
    return (
        <section className="gallery">
            {Data.map((item) => {
                return (
                    <Card
                        id={item.id}
                        cover={item.cover}
                        title={item.title}
                        price={item.price}
                        key={item.id}
                    />
                )
            })}
        </section>
    )
}

export default Gallery
