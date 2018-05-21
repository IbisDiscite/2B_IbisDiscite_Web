import React from 'react'
function Footer({ children }) {
    return (
        <footer className="container py-5">
            <div className="row">
                <div className="col-2 col-md">
                    <small className="d-block mb-3 text-muted">&copy; 2018</small>
                    <a className="text-muted" >Universida Nacional de Colombia</a>
                </div>
                <div className="col-4 col-md">
                    <h5>Ibis Discite</h5>
                    <ul className="list-unstyled ">
                        <li><a className="text-muted" >David Felipe Rodriguez Rodriguez</a></li>
                        <li><a className="text-muted" >John Alexander Hernandez Carrero</a></li>
                        <li><a className="text-muted" >Pedro Camilo Berrio Pinzon</a></li>
                        <li><a className="text-muted" >Sergio Alexander Gil Medina</a></li>
                        <li><a className="text-muted" >Juan Nicolas Sastoque Espinosa</a></li>
                    </ul>
                </div>
                <div className="col-4 col-md">
                    <h5>Arquitectura de computadores</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" >Jeisson Andrés Vergara Vargas</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer