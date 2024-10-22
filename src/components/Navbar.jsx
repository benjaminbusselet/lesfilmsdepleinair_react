import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-brand">Les Films de Plein Air</div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/lesfilmsdepleinair_react/#">
                            Accueil <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#association">
                            Notre Association
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#programmation">
                            La Programmation
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#parc">
                            Le Parc Monceau
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#inscrire">
                            S'inscrire
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
