import React from 'react'
import './Home.scss'
import Banner from '../../components/Banner/Banner'
import bracelet from '../../asset/2022/07/IMG_20210618_131530_237c1f1.jpg'
import bague from '../../asset/2022/06/214373402_332966255144035_7373813197406219268_n9c64.jpg'

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <section id="1" className="info section-1">
                <div className="top">
                    <div className="title">
                        <h2>QUI SUIS-JE ?</h2>
                    </div>
                </div>
                <div className="bot">
                    <div className="bot-left">
                        <div className="sub-title">
                            <h3>Créé en 2021</h3>
                        </div>
                        <div className="content">
                            <p>
                                La marque “Ici c’est sympa” a vu le jour durant
                                l’été 2021, le projet est née d’une envie de
                                couleurs et de positivisme, d’apporter le
                                sourire aux gens et d’offrir l’opportunité à
                                chacun d’avoir un bijoux qui lui ressemble tout
                                en lui rappelant que la vie peut être à la fois
                                fun et nostalgique.
                            </p>
                        </div>
                    </div>
                    <div className="bot-right">
                        <div className="illustration">
                            <img src={bracelet} alt="bracelet" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="2" className="info section-2">
                <div className="top">
                    <div className="title">
                        <h2>CE QUE JE FAIS</h2>
                    </div>
                </div>
                <div className="bot">
                    <div className="bot-left">
                        <div className="sub-title">
                            <h3>100% fait main, 100% coloré</h3>
                        </div>
                        <div className="content">
                            <p>
                                Les bijoux Ici c’est Sympa sont là pour raviver
                                la flamme de l’enfance de certains et également
                                de retrouver une tendance de nouveau actuelle
                                pour les plus jeunes.
                            </p>
                        </div>
                    </div>
                    <div className="bot-right">
                        <div className="illustration">
                            <img src={bague} alt="bague" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
