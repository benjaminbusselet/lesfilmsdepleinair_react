import React from 'react';

export default function Header() {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <h3>Du 5 au 8 août</h3>
                    <h2>Festival des Films de Plein Air</h2>
                    <p className="textfestival">Situé dans le cadre magnifique du Parc Monceau à Paris. Nous organisons ce festival afin de faire découvrir ou redécouvrir les plus beaux films d'auteurs.
                        <br />
                        <br /> Il se déroulera du 5 au 8 aout. 2 films seront projetés par soirée. La première séance sera à 18h, la deuxième à 21h.</p>
                    <h3>Parc Monceau - Paris</h3>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </header>
    );
};
