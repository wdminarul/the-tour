import React from 'react';
import pic from '../../images/City/home.jpg'
import pic1 from '../../images/City/home1.jpg'
import pic2 from '../../images/City/home2.jpg'
import pic3 from '../../images/City/home3.jpg'
import pic4 from '../../images/City/home4.jpg'

const City = () => {
    return (
        <div>
            <div className="container mb-5">
                <h2 className="text-center pt-2 ">Top <span className="text-danger">Cities View</span> </h2>
                <p className="text-center text-secondary pb-3">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={pic} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid" src={pic1} alt="" />
                            </div>
                            <div  className="col-md-6">
                                <img className="img-fluid" src={pic2} alt="" />
                            </div>
                            <div className="col-md-6 pt-3">
                                <img className="img-fluid" src={pic3} alt="" />
                            </div>
                            <div className="col-md-6 pt-3">
                                <img className="img-fluid" src={pic4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default City;