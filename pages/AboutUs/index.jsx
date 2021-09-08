import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import AboutImg from '../../assets/images/aboutUsImg.jpg';
import mozambiqueIslandImg from '../../assets/images/mozambique-island.jpg';
import './style.css';

function AboutUs(){

    return(
        <div id="about-us-content">
            <Navbar/>
            <main>
                <section>
                    <img src={AboutImg} alt="banner-about-us"/>
                </section>
                <section className="info">
                    <p>
                        The International Society of Obstetric Fistula Surgeon (ISOFS) is the leading international professional 
                        body for those engaged at the forefront of the prevention of obstetric fistula,  treatment and rehabilitation of 
                        women with fistula. It is the platform, where all fistula surgeons, organizations and personals committed to working for obstetric fistula in the globe, 
                        stands together with the goal to make the world fistula free. 
                    </p>
                    <h2><strong>Our Mission</strong></h2>
                    <p>
                        ISOFS Mission is to promote the highest standards of obstetric fistula care for women in a safe, effective and ethical manner. 
                        To realize this mission ISOFS works in cooperation with the national and international health care providers, health/academic centers, 
                        providers and educators with expertise and commitment in obstetric fistula management.

                        ISOFS is an young organization, developed with few dedicated fistula surgeons from Africa and Asia. 
                        At present ISOFS has more than 300 members from all over the world, specially from Africa and Asia. 
                        ISOFS is working with several partners who are having same goal of improving quality of life of women.
                    </p>
                </section>

                <section className="team">
                    <h2><strong>Our Team</strong></h2>
                    <div>
                        <div className="team-card">
                           <img src="https://isofs-global.org/public/uploads/team-member-10.jpg" alt="team"/> 
                            <div>
                                <h5>PROF. SAYEBA AKHTER</h5>
                                <h6>vice President</h6>
                            </div>
                        </div>

                        <div className="team-card">
                           <img src="https://isofs-global.org/public/uploads/team-member-1.jpg" alt="team"/> 
                            <div>
                                <h5>DR. SYED SHERSHAD</h5>
                                <h6>President</h6>
                            </div>
                        </div>
                        
                        <div className="team-card">
                           <img src="https://isofs-global.org/public/uploads/team-member-2.jpg" alt="team"/> 
                            <div>
                                <h5>PROF I. SUNDAY-ADEOYE</h5>
                                <h6>Executive Secretary</h6>
                            </div>
                        </div>

                        <div className="team-card">
                           <img src="https://isofs-global.org/public/uploads/team-member-3.jpg" alt="team"/> 
                            <div>
                                <h5>DDR. NUZHAT FAROQUI</h5>
                                <h6>Treasurer</h6>
                            </div>
                        </div>
                        
                        <div className="team-card">
                           <img src="https://isofs-global.org/public/uploads/team-member-13.jpg" alt="team"/> 
                            <div>
                                <h5>PROF DR GANESH DANGAL</h5>
                                <h6>south east asia representative</h6>
                            </div>
                        </div>
                        <div className="team-card">
                           <img src="https://isofs-global.org/public/uploads/team-member-8.jpg" alt="team"/> 
                            <div>
                                <h5>DR FRED FRED KIRYA</h5>
                                <h6>East africa representative</h6>
                            </div>
                        </div>
                        <div className="team-card">
                           <img src="https://isofs-global.org/public/uploads/team-member-4.jpg" alt="team"/> 
                            <div>
                                <h5> DR. STEVEN ARROWSMITH</h5>
                                <h6>Western European Rep.</h6>
                            </div>
                        </div>                       
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default AboutUs;