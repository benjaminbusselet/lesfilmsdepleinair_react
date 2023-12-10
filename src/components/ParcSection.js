import React from 'react';
import map from '../assets/map.png';

export default function ParcSection() {
    return (
        <section className="container-fluid" id="parc">
            <div className="row">
                <div className="offset-lg-4 col-lg-4 text-center">
                    <h4>Le Parc Monceau</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p className="textparc">
                        La construction du parc Monceau remonte au XVIIe siècle, sous l’impulsion du duc de Chartres. Situé dans le
                        8e arrondissement, il est aujourd’hui l’un des plus élégants jardins de Paris, à l’image du quartier. Le
                        visiteur pénètre par les grandes grilles en fer forgé rehaussées d’or. La promenade réserve de belles
                        surprises : nombreuses statues, une arcade Renaissance de l’ancien Hôtel de Ville de Paris, arbres
                        spectaculaires, grande diversité d’oiseaux et un grand bassin. Le parc Monceau est entouré d’immeubles de
                        luxe et de somptueux hôtels particuliers, dont le musée Cernuschi (arts asiatiques). Un parc calme et
                        agréable fréquenté par les parisiens et les touristes. Des aires de jeux pour les enfants sont disponibles.
                    </p>
                </div>
                <div className="col-lg-6" id="map">
                    <img className="img-fluid" src={map} alt="Map" />
                    <p className="map">
                        <strong>Metro</strong> : Monceau - Ligne 2
                        <br />
                        <br />
                        <strong>Vélib</strong> : Station N° 17018, 4 rue de thann - Station N° 8036, 39 rue de lisbonne - Station N°
                        8044, 2 rue alfred de vigny
                        <br />
                        <br />
                        <strong>Accès Handicapé</strong> : Entrée de plain-pied boulevard de Courcelles et avenue Valesquez. Les
                        toilettes ne sont pas accessibles (5 marches).
                    </p>
                </div>
            </div>
        </section>
    );
}
