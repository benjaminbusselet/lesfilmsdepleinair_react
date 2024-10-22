import React from 'react';

export default function InscriptionSection() {
    return (
        <section className="container-fluid" id="inscrire">
            <div className="col-lg-12">
                <div className="row">
                    <div className="offset-lg-4 col-lg-4 text-center">
                        <h4>S'inscrire</h4>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-4 col-lg-4">
                        <h6>L’entrée est totalement gratuite. Nous vous demanderons juste de vous inscrire sur notre site.</h6>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="offset-lg-4 col-lg-4">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nom" />
                                <br />
                                <input type="text" className="form-control" placeholder="Prénom" />
                                <br />
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="offset-lg-4 col-lg-4">
                        <h6>Nombre de places pour chaque soir :</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-4 col-lg-1">
                        <div className="form-group">
                            <label htmlFor="select">Le 5 Août</label>
                            <select className="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="form-group">
                            <label htmlFor="select">Le 6 Août</label>
                            <select className="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="form-group">
                            <label htmlFor="select">Le 7 Août</label>
                            <select className="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="form-group">
                            <label htmlFor="select">Le 8 Août</label>
                            <select className="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="offset-lg-4 col-lg-4">
                        <div className="text-center">
                            <button type="submit" className="btn btn-link">Valider</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
