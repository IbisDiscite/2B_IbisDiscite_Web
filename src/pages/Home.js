import React from 'react';
import '../components/product.css';
import Header from '../components/Header'

var divStyle = {
    alignItems: 'center',
    padding: "25px 50px"
};
const Home = () => (
    <div>
        <Header/>
        <div style={divStyle}>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Ibis Discite</h1>
                    <h3>Have you ever wonder why you don't understand English ?</h3>
                    <p className="lead font-weight-normal">There might be a simple reason, Ibis Discite it's an
                        application that will teach you the proper grammar for different subjects and situations, so you
                        always know what, and how to use it correctly.</p>
                    {/*<a className="btn btn-outline-secondary" href="#">Coming soon</a>*/}

                </div>
                <div className="product-device box-shadow d-none d-md-block"></div>
                <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
        </div>
    </div>

)

export default Home
