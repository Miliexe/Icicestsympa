import React from 'react'
import './Banner.scss'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-img">
                <img src="/img/banner.jpg" alt="banner" />
            </div>
            <div className="banner-content">
                <div className="title">
                    <h1>ICI C'EST SYMPA</h1>
                </div>
                <div
                    className="sub-title
                    "
                >
                    <h2>90s/00s Handmade Jewelry</h2>
                </div>
            </div>
        </section>
    )
}

export default Banner
