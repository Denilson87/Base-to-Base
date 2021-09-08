import React from 'react';
import Slider from 'react-slick';

import bazarutoImg from '../../assets/images/bazaruto-island.webp';
import quirimbasImg from '../../assets/images/quirimbas.jpg';
import iboImg from '../../assets/images/ibo.jpg';
import inhacaImg from '../../assets/images/inhaca.jpg';
import mozambiqueIslandImg from '../../assets/images/mozambique-island.jpg';

import ReadMore from '../ReadMore/index';

import './style.css';


function IslandCards() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                <div className="card">
                    <img src={mozambiqueIslandImg} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">MOZAMBIQUE ISLAND</h5>
                        <p className="card-text">
                            <ReadMore>
                                Now a World Heritage Site, this former capital of Portuguese East
                                Africa was a trading post, for gold,ivory and slaves, used by Portuguese
                                ships on their way to India. The old
                                part of the island is full of historical and architectural features. Numerous
                                buildings, some constructed of coral, date from the 16th century.
                                High quality accommodation attracts international
                                visitors who, as well as swimming and sunbathing, can take part in
                                number of outdoor activities and a full range of water-sports that
                                includes snorkelling, scuba diving, deep-sea fishing, salt water fly
                                fishing, sailing and water-skiing.Small antelope roam the islands
                                alongside fresh-water crocodiles
                            </ReadMore>
                        </p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="card">
                    <img src={quirimbasImg} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">BAZARUTO ARCHIPELAGO</h5>
                        <p className="card-text">
                            <ReadMore>
                                The most popular tourist area in Mozambique, the archipelago
                                consists of four main islands -Bazaruto, Benguera, Magaruque,
                                and Santa Carolina. They are situated some 35 km off the
                                mainland and are accessible by boat, or small aircraft, from the town
                                of Vilanculos. High quality accommodation attracts international
                                visitors who, as well as swimming and sunbathing, can take part in
                                number of outdoor activities and a full range of water-sports that
                                includes snorkelling, scuba diving, deep-sea fishing, salt water fly
                                fishing, sailing and water-skiing.Small antelope roam the islands
                                alongside fresh-water crocodiles,mangrove crabs and samango
                                monkeys while flamingo nest on the freshwater lakes.
                            </ReadMore>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src={iboImg} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">IBO ISLAND</h5>
                        <p className="card-text">
                            <ReadMore>
                                Part of the Quirimbas Archipelago,and a former Portuguese trading
                                post, this beautiful island has been nominated for World Heritage
                                status. Only accessible by boat from Pemba, it is well worth the effort as
                                the island is steeped in history and ancient culture. A number of
                                investors have identified this and community and conservation
                                projects are underway to protect Ibo’s biodiversity. The island prides
                                itself on its three historical forts. The largest, St Jao Baptista on the
                                northern side of the island, was used to imprison political prisoners from
                                Portugal as late as the 1970’s.
                            </ReadMore>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src={bazarutoImg} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">QUIRIMBAS ARCHIPELAGO</h5>
                        <p className="card-text">
                            <ReadMore>
                                Consisting of 32 small islands, including Ibo Island, and stretching
                                100 km from Pemba to the Rovuma River on the border with Tanzania,
                                the area boasts some of the richest coral reefs in the world and is home
                                to an abundant array of marine life.Luxury lodges provide ample
                                opportunity for relaxation while scuba diving, snorkelling, deep-seafishing, sailing,
                                surf-casting and bird watching are just some of the activities on offer. The southernmost
                                of the islands, and a vast expanse of mainland forest, form the recently
                                declared Quirimbas National Park.Elephant, leopard, lion, buffalo, wild
                                dog and an amazing bird-life may be seen here while the marine fauna
                                and flora includes sharks, sea turtles, humpback whales, the occasional
                                dugong and over 50 types of coral.
                            </ReadMore>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src={inhacaImg} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">INHACA ISLAND</h5>
                        <p className="card-text">
                            <ReadMore>
                                About 34 km out into Maputo Bay,Inhaca Island is accessible either by
                                boat or light aircraft. The lovely island offers many different activities
                                including a tractor ride to the lighthouse or a visit to the Marine
                                Biology Museum. Scuba diving,snorkelling, kayaking, parasailing,
                                windsurfing and surf or deep-sea fishing are just some of the more
                                exciting activities. An excursion to neighbouring Portuguese Island or
                                an escape to the ‘wild side’ of the island - with its crashing surf, deep
                                blue sea and glorious wind - are also recommended. The abundant
                                wildlife includes flamingo, pelicans and loggerhead turtles.
                            </ReadMore>
                        </p>
                    </div>
                </div>
            </Slider>
        </>
    );
}

export default IslandCards;