import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Dropzone from '../../components/Dropzone';
import Header from '../../components/Header';

import './style.css';

function Abstract(){
    return(
        <div id="abstract-content">
            <Navbar/>
            <Header>
                <strong>THEME</strong>: Obstetric Fistula, Unacceptable 
                        Challenge – End it Now
            </Header>
            <main>
                <section className="themes">
                    <div>
                        <h2>
                            Themes and sub-themes for abstracts
                        </h2>
                        <ol>
                            <li>
                                <strong>Prevention of iatrogenic fistulas</strong>
                                <ul>
                                    <li>Safe delivery in Africa</li>
                                    <li>The role of midwives in preventing obstetric trauma </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Training in Obstetric Fistula surgery</strong>
                                <ul>
                                    <li>Basis for training fistula surgeons</li>
                                    <li>Basic training in fistulas at universities and medical schools</li>
                                    <li>
                                        Mandatory training in fistula surgery in residency programs in Urology, <br/>
                                        Gynecology and general surgery
                                    </li>
                                    <li>Obstetric trauma or fistula what are the differences</li>
                                    <li>ISOFS, FIGO and UNFPA to support training</li>
                                    <li>The role of WACS and COSECSA in the training of surgeons</li>
                                    <li>Training nurses to prevent, diagnose and refer obstetric trauma</li>
                                    <li>Surgery technicians in the treatment of fistulas (Task shifting)</li>
                                    <li>Experience in Mozambique with surgical technicians</li>
                                    <li>
                                        Limits for a fistula surgeon “there are a fistula surgeon for simple cases ?”
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Fistula surgery or Obstetric trauma surgery</strong>
                                <ul>
                                    <li>Physiopathology of the obstetric trauma</li>
                                    <li>Postpartum urinary incontinence</li>
                                    <li>The burden and management of Fecal incontinence</li>
                                    <li>Prevention of outcastingof women and early treatment</li>
                                    <li>Prevention of Incontinence in the First Fistula Correction Surgery</li>
                                    <li>Incontinence after simple fistula surgery tip I</li>
                                    <li>Burden of Iatrogenic fistula, Treatment and prevention</li> 
                                    <li>Management and outcomes of Type IIBb Fistulas</li> 
                                    <li>Fistula with total destruction of the urethra</li> 
                                    <li>Urethra reconstruction and the neo urethra and outcomes</li>
                                    <li>Management and outcomes of Very large fistulas and obstructed vagina</li>  
                                    <li>Gynatresia</li> 
                                    <li>Vaginal reconstructive surgeries for gynatresia</li>
                                    <li>The Singapura Flap</li> 
                                    <li>Bowel neo vagina</li> 
                                    <li>Strategies for management of fistulas “deem incurable”</li> 
                                </ul>
                            </li>

                            <li>
                                <strong>Physical and nutritional rehabilitation</strong>
                                <ul>
                                    <li>Dropped foot</li>
                                    <li>Physiotherapy for incontinence</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Rehabilitation of the Obstetric Fistula Client</strong>
                            </li>

                            <li>
                                <strong>Social reintegration of the persistently wet woman.</strong>
                                <ul>
                                    <li>Psychological support</li>
                                    <li>Support for social reintegration with cultural groups</li>
                                    <li>The role of NGOs supporting fistula patients</li>
                                    <li>Support to incurables</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div>
                        <h3>Abstract submission</h3>
                        <form>
                            <div className="form-group">
                                <label for="abstratTitle">Abstract Title</label>
                                <input type="text" className="form-control" id="abstratTitle"/>
                            </div>
                            <div className="form-group">
                                <label for="actorName">Actor Name</label>
                                <input type="text" className="form-control" id="actorName"/>
                            </div>
                            <Dropzone/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Abstract;