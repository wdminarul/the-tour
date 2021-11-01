
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './offers.css'

const Offers = () => {
    const [hotels,setHotels] =useState([]);
    const [defence,setDefence] = useState(null)
    const {user} = useFirebase();
    useEffect(()=>{
        fetch('https://grim-werewolf-66766.herokuapp.com/bookingServices')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[defence])
    const handleAddCart= index =>{
        const data = hotels[index];
        delete data._id
        data.email = user?.email;
        fetch('https://grim-werewolf-66766.herokuapp.com/addOrder',{
            method:"POST",
            headers:{"content-type":"application/json" },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
        //     console.log(data.result)
        // const remaning= hotels.filter(hotel=>hotel?._id)
        // setHotels(remaning)
        if(data.deletedCount){
            setDefence(true)
        }
        else{
            setDefence(false)
        }
    })
    }
    return (
        <div>
          <div className="container">
              <h2 className=" text-center pt-5 pb-3"> Booking <span className="text-danger">Hotel</span> </h2>
              <p className="text-secondary text-center pb-3">Advance travel booking, especially for hotels, is beneficial especially during the peak seasons. It is usually a good idea to have your bookings in place before you travel to your destination, be it for work or a vacation. It saves you a lot of hassles and, sometimes, a lot of money on accommodation.</p>
              <div  className="row gx-5">
                  {
                    hotels.map((hotel,index)=><div className="col-md-4 ">
                    <div className="border shadow  mb-5 bg-body rounded main-section p-3">
                               <img className="img-section" src={hotel?.img} alt="" />
                                <h3 className="text-danger text-center">{hotel?.name}</h3>
                                <h5 className="text-warning">Per Night: {hotel?.price}TK</h5>
                                <p className="text-secondary">{hotel?.description}</p>
                                <Link to={`/my-order`}>
                                <button className="btn btn-danger" onClick={()=>handleAddCart(index)}>Book Now</button>
                                </Link>
                        </div>                 
                    </div>)
              }
                  </div>    
          </div>
        </div>
    );
};

export default Offers;