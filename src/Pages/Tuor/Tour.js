import React from 'react';
import t1 from "../../images/tour/t1.png"
import t2 from "../../images/tour/t2.png"
import t3 from "../../images/tour/t3.png"
import t4 from "../../images/tour/t4.png"
import t5 from "../../images/tour/t5.png"
import t6 from "../../images/tour/t6.png"
import "./tour.css"

const Tour = () => {
    return (
        <div>
            <div className="container overflow-hidden mt-3 mb-5">
                <h2 className="text-center pt-5 pb-3 mt-3">Top <span className="text-danger">Tour Place</span> </h2>
                <p className="text-center text-secondary">World's leading tour and travels Booking website,Over 30,000 packages worldwide.</p>
                <div className="row gx-5">
                    <div className="col-md-4">
                    <div className=" border shadow  mb-5 bg-body roundedt all ">
                        <img src={t1} alt="" />
                        <h3 className="text-danger text-center">Paris</h3>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className=" border shadow  mb-5 bg-body rounded all">
                        <img src={t2} alt="" />
                        <h3 className="text-danger text-center">China</h3>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t3} alt="" />
                        <h3 className="text-danger text-center">India</h3>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t4} alt="" />
                        <h3 className="text-danger text-center">Nael Island</h3>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t5} alt="" />
                        <h3 className="text-danger text-center">British</h3>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="border  all shadow  mb-5 bg-body rounded">
                        <img src={t6} alt="" />
                        <h3 className="text-danger text-center">Mauritius</h3>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Tour;