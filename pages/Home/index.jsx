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

function Home() {
  
  return (
    <div className="home-content">
      <Navbar/>
      <main>
        <section className="conference-info">
          <Carousel/>
        </section>

        <section className="mozambique-info">
          <h1>ISOFS 2021 CONFERENCE TO HOLD IN MAPUTO MOZAMBIQUE</h1>
          <h6>Confereces & workshop - March 13, 2020 </h6>
          <div>
            <p>
            The 8th International Conference of the Society of Obstetric Fistula Surgeons (ISOFS)
            initially scheduled to be held from March 10th - 13th in Maputo, Mozambique is now to
            be held in November 2021. The Pre-Conference meeting will now be held the first week
            of November. Abstract submission is still on and will now end in August, 2021.
            </p>
            <p>
            The Conference is a unique opportunity to promote the highest standards for obstetric
            fistula care for women in a safe, effective, and ethical manner. Fostering collaboration
            between communities and health systems, enhanced knowledge on basic and clinical 
            obstetric fistula research, and ethical standards and guidelines will be featured on the agenda.
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

export default Home;