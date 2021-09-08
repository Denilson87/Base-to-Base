import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import hcmImage from '../../assets/images/hcm.jpg';

import './style.css';

function Hospital(){
    return (
        <div id="hotel-content">
            <Navbar/>
            <Header>Hospitals</Header>
            <main>
                <div>
                    <article className="hospital-item">
                        <h2>Hospital Central de Maputo</h2>
                        <div>
                            <section className="hospital-info">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolorem dolores ratione 4
                                    illo nobis recusandae ad? Minus accusantium, molestiae tenetur obcaecati quibusdam dolores 
                                    voluptate officia numquam enim, voluptates natus ut.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolorem dolores ratione 4
                                    illo nobis recusandae ad? Minus accusantium, molestiae tenetur obcaecati quibusdam dolores 
                                    voluptate officia numquam enim, voluptates natus ut.
                                </p>
                            </section>
                            <section className="hospital-photo">
                                <img src={hcmImage} alt="holpitalImg"/>
                            </section>
                        </div>
                        <footer>
                            <strong>Telefone:</strong>&nbsp; 21 357 900
                        </footer>
                    </article>

                    <article className="hospital-item">
                        <h2>Hospital Central de Maputo</h2>
                        <div>
                            <section className="hospital-info">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolorem dolores ratione 4
                                    illo nobis recusandae ad? Minus accusantium, molestiae tenetur obcaecati quibusdam dolores 
                                    voluptate officia numquam enim, voluptates natus ut.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolorem dolores ratione 4
                                    illo nobis recusandae ad? Minus accusantium, molestiae tenetur obcaecati quibusdam dolores 
                                    voluptate officia numquam enim, voluptates natus ut.
                                </p>
                            </section>
                            <section className="hospital-photo">
                                <img src={hcmImage} alt="holpitalImg"/>
                            </section>
                        </div>
                        <footer>
                            <strong>Telefone:</strong>&nbsp; 21 357 900
                        </footer>
                    </article>
                </div>
            </main>

            <Footer/>
        </div>

    );
}

export default Hospital;