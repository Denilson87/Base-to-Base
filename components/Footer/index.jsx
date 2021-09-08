import React from 'react';
import {Link} from 'react-router-dom';
import {FiFacebook,FiTwitter,FiLinkedin,FiYoutube,FiSend,FiMail,FiPhone} from 'react-icons/fi';

import logo from '../../assets/images/logo.png'

import './style.css';

function Footer(){
    return(
        <div id="footer-content">
            <section>
                <div className="logo-section">
                    <img src={logo} alt="logoImage"/>
                </div>
                <div className="information-section">
                    <h2>CONGRESS</h2>
                    <ul>
                        <li>
                            <Link to="/about-us">AboutUs</Link>
                        </li>
                        <li><Link>Speakers</Link></li>
                        <li><Link to="/agend">Agend</Link></li>
                        <li><Link to="/abstracts-submission">Abstract Submission</Link></li>
                    </ul>
                </div>

                <div className="helpful-links-section">
                    <h2>HelpfulLinks</h2>
                    <ul>
                        <li>
                            <Link to="/contact">Contacts</Link>
                        </li>
                        <li>
                            <Link target={"_blank"} to={{pathname:"https://isofs-global.org/public/uploads/file-18.pdf"}} style={{ textDecoration: 'none' }}>
                                Mozambique tourism
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="contacts-section">
                    <h2>Contacts</h2>
                    <ul>
                        <li>
                            <FiMail size={16}/>
                            &nbsp; info@focusfistula.co.mz
                        </li>
                        <li>
                            <FiPhone size={16}/>
                            &nbsp; (+258)84 00 00 000
                        </li>
                    </ul>
                    <div>
                        <Link>
                            <FiFacebook size={24} color="#1877f2"/>
                        </Link>
                        <Link>
                            <FiTwitter size={24}  color="#1da1f2"/>
                        </Link>
                        <Link>
                            <FiLinkedin size={24} color="#0274b3"/>
                        </Link>
                        <Link>
                            <FiYoutube size={24}  color="#fe0002"/>
                        </Link>
                    </div>
                </div>


                <div className="news-letter-section">
                    <h2>Newsletter</h2>
                    <form>
                        <div>
                            <input name="email"  class="form-control" type="email" placeholder="Email Address" required />
                            <button className="btn">
                                <FiSend size={24} color="#fff"/>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div>
                    &#169;2020 ISOFS All rights reserved
                </div>
                <div className="builder">
                    By::   
                    <Link target={"_blank"} to={{pathname:"http://www.projenity.com"}} style={{ textDecoration: 'none' }}>
                        <span>Proj<span>enity</span></span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Footer;
// eslint-disable-next-line