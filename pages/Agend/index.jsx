import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';

function Schedule() {
    return(
        <div id="schedule-content">
            <Navbar/>
            <Header>Events</Header>
            <main>
                <section>                   
                    <article>
                    <header>
                            <span>10 AM</span>
                            <h4>2021 Conference Abstract Submission Page</h4>

                        </header>
                        <div>
                            <ul>
                                <li>
                                    <p> Address: Maputo, Mozambique<span></span></p>
                                </li>
                                <li>
                                    <p> Start Date: August 24, 2020</p>
                                </li>
                                <li>
                                    <p> End Date: December 31, 2020</p>
                                </li>
                            </ul> 
                        </div>
                    </article>

                    <article>
                        <header>
                            <span>10 AM</span>
                            <h4>
                           ISOFS 2021: Abstracts preparation Guidelines</h4>
                        </header>
                        <div>
                            <ul>
                                <li>
                                    <p> Address: Maputo, Mozambique<span></span></p>
                                </li>
                                <li>
                                    <p> Start Date: August 18, 2020 </p>
                                </li>
                                <li>
                                    <p> End Date: December 31, 2020</p>
                                </li>
                            </ul> 
                        </div>
                    </article>

                    <article>
                        <header>
                            <span>10 AM</span>
                            <h4>
                            ISOFS 2021 Conference to hold in Maputo Mozambique</h4>
                        </header>
                        <div>
                            <ul>
                                <li>
                                    <p> Address: Maputo, Mozambique<span></span></p>
                                </li>
                                <li>
                                    <p> Start Date: March 08, 2020 </p>
                                </li>
                                <li>
                                    <p>End Date: March 13, 2020</p>
                                </li>
                            </ul> 
                        </div>
                    </article>
                </section>

                <section>
                <article>
                        <header>
                            <span>10 AM</span>
                            <h4>
                            ISOFS 2021 Conference to hold in Maputo Mozambique</h4>
                        </header>
                        <div>
                            <ul>
                                <li>
                                    <p> Address: Maputo, Mozambique<span></span></p>
                                </li>
                                <li>
                                    <p> Start Date: March 08, 2020 </p>
                                </li>
                                <li>
                                    <p>End Date: March 13, 2020</p>
                                </li>
                            </ul> 
                        </div>
                    </article>

                    <article>
                        <header>
                            <span>10 AM</span>
                            <h4>
                            ISOFS 2021 Conference to hold in Maputo Mozambique</h4>
                        </header>
                        <div>
                            <ul>
                                <li>
                                    <p> Address: Maputo, Mozambique<span></span></p>
                                </li>
                                <li>
                                    <p> Start Date: March 08, 2020 </p>
                                </li>
                                <li>
                                    <p>End Date: March 13, 2020</p>
                                </li>
                            </ul> 
                        </div>
                    </article>

                    <article>
                        <header>
                            <span>10 AM</span>
                            <h4>
                            ISOFS 2021 Conference to hold in Maputo Mozambique</h4>
                        </header>
                        <div>
                            <ul>
                                <li>
                                    <p> Address: Maputo, Mozambique<span></span></p>
                                </li>
                                <li>
                                    <p> Start Date: March 08, 2020 </p>
                                </li>
                                <li>
                                    <p>End Date: March 13, 2020</p>
                                </li>
                            </ul> 
                        </div>
                    </article>

                                
                </section>
            </main>
            <div 
                id="presenting-section" 
                className=""
            >
                <Link>Conference will be presented by 31 november 2021</Link>
            </div>
            <Footer/>
        </div>
    );
}

export default Schedule;