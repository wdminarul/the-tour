import React from 'react';
// import { Link } from 'react-router-dom';
import './offer.css'

const Offer = (props) => {
    const {name,img,description,price}=props.service;

    return (
        <div className="col-md-4 ">
            <div className="border shadow  mb-5 bg-body rounded main-section p-3">
                       <img className="img-section" src={img} alt="" />
                        <h3 className="text-danger text-center">{name}</h3>
                        <h5 className="text-warning">Per Night: {price}TK</h5>
                        <p className="text-secondary">{description}</p>
                        {/* <Link to={`/booking/${keys}`}> */}
                        <button className="btn btn-danger" >Book Now</button>
                        {/* </Link> */}
                </div>                 
            </div>
    );
};

export default Offer;