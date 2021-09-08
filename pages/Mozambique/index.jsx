import React from 'react';
import 'animate.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Islands from '../../components/IslandCards';
import Slider from '../../components/Slider';
import Carousel from '../../components/Carousel';

import partner1 from '../../assets/images/partners/partner-1.png';
import partner2 from '../../assets/images/partners/partner-2.png';
import partner3 from '../../assets/images/partners/partner-3.png';
import partner4 from '../../assets/images/partners/partner-4.png';
import partner5 from '../../assets/images/partners/partner-5.png';
import partner6 from '../../assets/images/partners/partner-6.png';

import organizer1 from '../../assets/images/FocusFistula.png';
import organizer2 from '../../assets/images/misau4.png';

import Map from '../../assets/images/map2.jpg';

import './style.css';

function mozambique() {
  
  return (
    <div className="home-content">
      <Navbar/>
      <main>
        <section className="conference-info">
          <Carousel/>
        </section>

         <section className="mozambique-info">
          <h1>MOZAMBIQUE</h1>
          <div>
            <img src={Map} alt="map"/>
            <p>
            Mozambique, officially designated as the Republic of Mozambique, is a country located in the southeast of the African continent, bordering the Indian Ocean to the east and bordering Tanzania to the north; Northwest Malawi and Zambia; Zimbabwe to the west and Essuatini and South Africa to the southwest. The capital and largest city in the country is Maputo, previously called Lourenço Marques, during Portuguese rule.
            </p>
            <p>
            Between the first and the fifth centuries, Bantu peoples migrated from northern and western regions to that region. Swahili and later Arab commercial ports existed on the Mozambican coast until Europeans arrived. The area was recognized by Vasco da Gama in 1498 and in 1505 it was annexed by the Portuguese Empire. After more than four centuries of Portuguese rule, Mozambique became independent in 1975, becoming the People's Republic of Mozambique shortly thereafter. After just two years of independence, the country plunged into an intense and protracted civil war that lasted from 1977 to 1992. In 1994, the country held its first multi-party elections and has remained a relatively stable presidential republic ever since.
            </p>
            <p>
            <p>
            Between the first and the fifth centuries, Bantu peoples migrated from northern and western regions to that region. Swahili and later Arab commercial ports existed on the Mozambican coast until Europeans arrived. The area was recognized by Vasco da Gama in 1498 and in 1505 it was annexed by the Portuguese Empire. After more than four centuries of Portuguese rule, Mozambique became independent in 1975, becoming the People's Republic of Mozambique shortly thereafter. After just two years of independence, the country plunged into an intense and protracted civil war that lasted from 1977 to 1992. In 1994, the country held its first multi-party elections and has remained a relatively stable presidential republic ever since.
            </p>
            </p>
            {/*  */}
            
          </div>
          
        </section>

        <section className="islands-info">
          <h2>Islands</h2>
          <Islands/>
        </section>

        <section className="slider organizers">
          <h2>Organizers</h2>
          <Slider slidesToShow={3}>
            <div className="item">
                <img src={organizer1} className="card-img-top" alt="organizer1" />
            </div>
            <div className="item">
                <img src={partner3} className="card-img-top" alt="organizer2" />
            </div>
            <div className="item">
                <img src={organizer2} className="card-img-top" alt="organizer3" />
            </div>
          </Slider>
        </section>
        
        <section className="slider">
          <h2>Partners</h2>
          <Slider slidesToShow={4}>
            <div className="item">
                <img src={partner1} className="card-img-top" alt="client1" />
            </div>
            <div className="item">
                <img src={partner2} className="card-img-top" alt="client2" />
            </div>
            <div className="item">
                <img src={partner3} className="card-img-top" alt="client3" />
            </div>
            <div className="item">
                <img src={partner4} className="card-img-top" alt="client3" />
            </div>
            <div className="item">
                <img src={partner5} className="card-img-top" alt="client3" />
            </div>
            <div className="item">
                <img src={partner6} className="card-img-top" alt="client3" />
            </div>
          </Slider>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default mozambique;