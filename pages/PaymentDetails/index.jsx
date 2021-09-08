import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import logo from '../../assets/images/logo.png';

function PaymentDetail(){
    return(
        <div id="paymentDetails-content">
            <Navbar/>
            <main>
                <header>
                    <div>
                        <img src={logo} alt="logo"/>
                        <h2>Invoice</h2>
                        <small>invoice number:87152343613</small>
                    </div>
                </header>

                <section>
                    <strong>Charge from:</strong>
                    <p>Gabriel Timba</p>
                </section>

                <section>
                    <div>
                        <h3>Details</h3>
                        <p>Invoice number:87152343613</p>
                        <p>Invoice date: March 05, 2021</p>
                    </div>
                    <div>
                        <h3>ISOFS Conference</h3>
                        <p>Amount Paid: <span>US$ 130,00</span></p>
                    </div>
                </section>
            </main>
        </div>

    );
}

export default PaymentDetail;