import React from 'react'
import '../../data/data.json'
import './Bijoux.scss'
import Gallery from '../../components/Gallery/Gallery'

const Bijoux = () => {
    return (
        <main className="bijoux">
            <div className="title">
                <h1>Bijoux</h1>
            </div>
            <div className="sub-title">
                <h2>La boutique en ligne</h2>
            </div>
            <Gallery />
        </main>
    )
}

export default Bijoux
