import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Label, FormGroup,Button } from 'reactstrap';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import donateImg from '../../assets/images/donate8.jpg';

import './style.css';

function Donation(){
    return(
        <div id="donation-content">
            <Navbar/>
            <Header>Donations</Header>
            <main>
                <section>
                    <img src={donateImg} alt="DonateImage"/>
                </section>
                <section>
                    <AvForm>
                        <AvGroup>
                            <Label for="card-number">CARD NUMBER</Label>
                            <AvInput name="card-number" id="card-number" />
                            <AvFeedback>Fill this field correctly!</AvFeedback>
                        </AvGroup>

                        <section>
                            <AvGroup>
                                <Label for="expiry-mouth">EXPIRY MOUTH</Label>
                                <AvInput name="expiry-mouth" id="expiry-mouth" />
                                <AvFeedback>Fill this field correctly!</AvFeedback>
                            </AvGroup>

                            <AvGroup>
                                <Label for="expery-year">EXPIRY YEAR</Label>
                                <AvInput name="expery-year" id="expiry-year" />
                                <AvFeedback>Fill this field correctly!</AvFeedback>
                            </AvGroup>

                            <AvGroup>
                                <Label for="card-number">CSV</Label>
                                <AvInput name="card-number" id="card-number" />
                                <AvFeedback>Fill this field correctly!</AvFeedback>
                            </AvGroup>

                            <AvGroup>
                                <Label for="card-number">AMOUNT</Label>
                                <AvInput name="card-number" id="card-number" />
                                <AvFeedback>Fill this field correctly!</AvFeedback>
                            </AvGroup>
                        </section>

                        <FormGroup className="d-flex">
                            <Button 
                                color="info"
                                className="ml-auto"
                            >
                                Donate
                            </Button>
                        </FormGroup>
                    </AvForm>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Donation;