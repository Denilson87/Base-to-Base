import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {FiPhone} from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';
import {FiMapPin} from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './style.css';

function Contacts(){

    const mapStyles = {        
        height: "60vh",
        width: "100%"
    };
      
    const defaultCenter = {
        lat: -25.9748197, lng: 32.5617623
    }

    return(
        <div id="contacts-content">
            <Navbar/>
            <Header>ContactUs</Header>
            <main>
                <LoadScript
                    googleMapsApiKey=''
                >
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={16}
                        center={defaultCenter}
                    />
                </LoadScript>
                <div className="contacts-info">
                    <article>
                        <FiPhone size={24} color="#008080"/>
                        <p>Phone Us</p>
                        <ul>
                            <li>+258 84 32 15 785</li>
                            <li>+258 82 32 15 785</li>
                        </ul>
                    </article>

                    <article>
                        <FiMail size={24} color="#008080"/>
                        <p>Email Us</p>
                        <ul>
                            <li>info@focusfistula.co.mz</li>
                            <li>isofs-secretary@gmail.com</li>
                            <li>secretary@isofs-global.org</li>
                        </ul>
                    </article>

                    <article>
                        <FiMapPin size={24} color="#008080"/>
                        <p>Our Address</p>
                        <ul>
                            <li>Associacao Focus Fistula, Rua jose Mateus 163,Mozambique</li>
                        </ul>
                    </article>
                </div>

            </main>
            <Footer/>
        </div>
    );
}

export default Contacts;