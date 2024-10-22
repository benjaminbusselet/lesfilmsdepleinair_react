import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import jenniferVialaImage from '../assets/jenniferviala.jpg';

export default function AssociationSection() {
    return (
        <div className="container-fluid">
            <section className="row" id="association">
                <div className="offset-lg-4 col-lg-4 text-center">
                    <h4>Notre Association</h4>
                    <hr />
                </div>
                <div className="col-lg-6 text-center">
                    <h1>Les Films de Plein Air</h1>
                    <img className="img-fluid" src={jenniferVialaImage} alt="Jennifer Viala" />
                    <br />
                    <h6>Jennifer Viala - Organisatrice</h6>
                    <p>Amoureux du cinéma, nous souhaitons faire partager notre passion avec le plus grand nombre.</p>
                </div>

                <div className="col-lg-6 text-center" id="twitter">
                    <>
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'JenniferViala'
                            }}
                            options={{
                                height: '500'
                            }}
                        />
                    </>
                </div>
            </section>
        </div>
    );
}
