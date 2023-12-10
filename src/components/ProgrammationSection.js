import React from 'react';
import soiree1 from '../assets/soiree1.png';
import soiree2 from '../assets/soiree2.png';
import soiree3 from '../assets/soiree3.png';
import soiree4 from '../assets/soiree4.png';

export default function ProgrammationSection() {
    return (
        <section className="container-fluid" id="programmation">
            <div className="row">
                <div className="offset-lg-4 col-lg-4 text-center">
                    <h4>La programmation</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="offset-2 col-8 text-center">
                    <button className="btn btn-link" data-target="#main-carousel" data-slide-to="0" type="button">
                        Le 5 Aout
                    </button>
                    <button className="btn btn-link" data-target="#main-carousel" data-slide-to="1" type="button">
                        Le 6 Aout
                    </button>
                    <button className="btn btn-link" data-target="#main-carousel" data-slide-to="2" type="button">
                        Le 7 Aout
                    </button>
                    <button className="btn btn-link" data-target="#main-carousel" data-slide-to="3" type="button">
                        Le 8 Aout
                    </button>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div id="main-carousel" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="img-fluid" src={soiree1} alt="Le 5 Aout" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid" src={soiree2} alt="Le 6 Aout" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid" src={soiree3} alt="Le 7 Aout" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid" src={soiree4} alt="Le 8 Aout" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}