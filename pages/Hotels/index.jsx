import React from 'react';
import {Link} from 'react-router-dom';
import {FiFacebook,FiTwitter,FiInstagram,FiPhone,FiMap,FiMail,FiHome} from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import img1 from '../../assets/images/Hotels/polana_01.jpg';
import img2 from '../../assets/images/Hotels/polana_02.jpg';
import img3 from '../../assets/images/Hotels/polana_03.jpg';
import img4 from '../../assets/images/Hotels/polana_04.jpg';
import img5 from '../../assets/images/Hotels/polana_05.jpg';
import img6 from '../../assets/images/Hotels/polana_06.jpg';

import imgGloria1 from '../../assets/images/Hotels/gloria_01.jpg';
import imgGloria2 from '../../assets/images/Hotels/gloria_02.jpg';
import imgGloria3 from '../../assets/images/Hotels/gloria_03.jpg';
import imgGloria4 from '../../assets/images/Hotels/gloria_04.jpg';
import imgGloria5 from '../../assets/images/Hotels/gloria_05.jpg';
import imgGloria6 from '../../assets/images/Hotels/gloria_06.jpg';

import imgRadisson1 from '../../assets/images/Hotels/radisson_01.jpg';
import imgRadisson2 from '../../assets/images/Hotels/radisson_02.jpg';
import imgRadisson3 from '../../assets/images/Hotels/radisson_03.jpg';
import imgRadisson4 from '../../assets/images/Hotels/radisson_04.webp';
import imgRadisson5 from '../../assets/images/Hotels/radisson_05.webp';
import imgRadisson6 from '../../assets/images/Hotels/radisson_06.webp';

import './style.css';

function Hotel (){
    
    return(
        <div id="hotel-content">
            <Navbar/>
            <main>
                <header className="page-header">
                    <strong>Hotels</strong>
                </header>

                <div>
                    <article className="hotel-item">
                        <h2>Hotel Polana</h2>
                        <div>
                            <section className="hotel-info">
                                <p>
                                    Feel like a celebrity with polana Serena Hotel's top service
                                </p>
                                <p>
                                    With an outdoor swimming pool and a restaurant, Polana Serena Hotel is located
                                    in Maputo. The hotel offers free Wi-Fi.
                                </p>
                                <p>
                                    All rooms have a TV, air conditioning and a minibar, also feature an electric kettle.
                                    The private bathroom has a bathtub or shower, a hairdryer and free toiletries. Additional facilities 
                                    include a seating area and satellite channels.
                                </p>

                                <p>
                                    Maputo International Airport is 4.3 miles away and airport shuttle service can be arranged for a fee.
                                </p>

                                <ul>
                                    <li>
                                        <FiMap size={16}/> &nbsp;
                                        Avenida Julius Nyerere 1380, Maputo, Mozambique
                                    </li>
                                    <li>
                                        <FiMail size={16}/> &nbsp;
                                        <strong>Reservations</strong>: reservations.polana@serenahotels.com
                                    </li>
                                    <li>
                                        <FiPhone size={16}/> &nbsp;
                                        +258 21 241 700
                                    </li>
                                    <li>
                                        <FiPhone size={16}/> &nbsp;
                                        +258 21 491 480
                                    </li>
                                </ul>
                            </section>
                            <section className="hotel-photos">
                                <ul>
                                    <li>
                                        <img src={img1} alt="polana01"/>
                                    </li>
                                    <li><img src={img2} alt="polana02"/></li>
                                    <li><img src={img3} alt="polana03"/></li>
                                    <li><img src={img4} alt="polana04"/></li>
                                    <li><img src={img5} alt="polana05"/></li>
                                    <li><img src={img6} alt="polana06"/></li>
                                </ul>
                            </section>
                        </div>
                        <footer>
                            <a href="https://www.facebook.com/serenapolana/?fref=ts" target="_blank" rel="noreferrer">
                                <FiFacebook size={24} color="#1877f2"/>
                            </a>

                            <a href="https://twitter.com/serenapolana" target="_blank" rel="noreferrer">
                                <FiTwitter size={24}  color="#1da1f2"/>
                            </a>

                            <a href="https://www.instagram.com/serenahotels/" target="_blank" rel="noreferrer">
                                <FiInstagram size={24}  color="#c6266c"/>
                            </a>
                        </footer>
                    </article>

                    <article className="hotel-item">
                        <h2>Hotel Gloria</h2>
                        <div>
                            <section className="hotel-info">
                                <p>
                                    Make yourself at home in one of the 258 air-conditioned rooms, a minibar and a flat-screen TV. 
                                    Connect to the internet with free wireless and take a peek at your emails. Alternatively, 
                                    watch a selection of satellite channels. The private bathrooms feature a separate shower and bathtub, 
                                    free toiletries and hair dryers. Facilities include a safe and a coffee machine/teapot. 
                                    The rooms are cleaned daily.
                                </p>
                                <p>
                                    Don't miss out on the various leisure and entertainment options at your disposal, including a nightclub, 
                                    an outdoor swimming pool and a fitness room. Additional facilities include free Wi-Fi, concierge services 
                                    and a gift shop/newspaper kiosk.
                                </p>

                                <ul>
                                    <li>
                                        <FiMap size={16}/> &nbsp;
                                        Avenida Da Marginal 4441, Maputo, Mozambique
                                    </li>
                                    <li>
                                        <FiMail size={16}/> &nbsp;
                                        <strong>Email</strong>: res.ggmpmb@gloriahotels.com
                                    </li>
                                    <li>
                                        <FiHome size={16}/> &nbsp;
                                        <strong>Website</strong>: 
                                        <a href="http://www.gloriahotel.co.mz/" target="__blank">
                                            http://www.gloriahotel.co.mz/
                                        </a> 
                                    </li>
                                    <li>
                                        <FiPhone size={16}/> &nbsp;
                                        +258 21266676
                                    </li>
                                </ul>
                            </section>
                            <section className="hotel-photos">
                                <ul>
                                    <li>
                                        <img src={imgGloria1} alt="gloria01"/>
                                    </li>
                                    <li><img src={imgGloria2} alt="gloria02"/></li>
                                    <li><img src={imgGloria3} alt="gloria03"/></li>
                                    <li><img src={imgGloria4} alt="gloria04"/></li>
                                    <li><img src={imgGloria5} alt="gloria05"/></li>
                                    <li><img src={imgGloria6} alt="gloria06"/></li>
                                </ul>
                            </section>
                        </div>
                        <footer>
                            <a href="https://pt-br.facebook.com/maputogloriahotel/" target="_blank" rel="noreferrer">
                                <FiFacebook size={24} color="#1877f2"/>
                            </a>

                            <a href="https://twitter.com/gloriahotels" target="_blank" rel="noreferrer">
                                <FiTwitter size={24}  color="#1da1f2"/>
                            </a>
                        </footer>
                    </article>

                    <article className="hotel-item">
                        <h2>Hotel Radisson</h2>
                        <div>
                            <section className="hotel-info">
                                <p>
                                    Radisson Blu Hotel & Residence, Maputo is perfect for exploring Mozambique's capital, Maputo. 
                                    Whether you stay with us on business or on tour, you will see that Maputo has a lot to offer
                                </p>
                                <p>
                                    Ideally located in Maputo Beach, you will be close to the vibrant nightlife and many of Maputo's 
                                    attractions. You will be able, among other things, to discover military history at the Maputo Museum 
                                    of Military History. The museum is located in Maputo Fortress, which was built by the Portuguese in 1787. 
                                </p>
                                <ul>
                                    <li>
                                        <FiMap size={16}/> &nbsp;
                                        Avenida Da Marginal 141, Maputo, Mozambique
                                    </li>
                                    <li>
                                        <FiMail size={16}/> &nbsp;
                                        <strong>Email</strong>: info.maputo@radissonblu.com
                                    </li>
                                    <li>
                                        <FiHome size={16}/> &nbsp;
                                        <strong>Website</strong>: 
                                        <a href="https://www.radissonhotels.com/pt-br/" target="__blank">
                                            https://www.radissonhotels.com/pt-br/
                                        </a> 
                                    </li>
                                    <li>
                                        <FiPhone size={16}/> &nbsp;
                                        +258 xxxxxx
                                    </li>
                                </ul>
                            </section>
                            <section className="hotel-photos">
                                <ul>
                                    <li>
                                        <img src={imgRadisson1} alt="radisson01"/>
                                    </li>
                                    <li><img src={imgRadisson2} alt="radisson02"/></li>
                                    <li><img src={imgRadisson3} alt="radisson03"/></li>
                                    <li><img src={imgRadisson4} alt="radisson04"/></li>
                                    <li><img src={imgRadisson5} alt="radisson05"/></li>
                                    <li><img src={imgRadisson6} alt="radisson06"/></li>
                                </ul>
                            </section>
                        </div>
                        <footer>
                            <a href="https://www.facebook.com/RadissonHotels" target="_blank" rel="noreferrer">
                                <FiFacebook size={24} color="#1877f2"/>
                            </a>

                            <Link>
                                <FiTwitter size={24}  color="#1da1f2"/>
                            </Link>
                        </footer>
                    </article>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default Hotel;