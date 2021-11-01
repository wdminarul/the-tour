import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "./manage.css"

const Manage = () => {
    const { register, handleSubmit } = useForm();
    const [bookings,setBookings] =useState([])
    const [allOrders,setAllOrders] = useState([])
    const [deleted,setDeleted] = useState(null)
    useEffect(()=>{
        fetch('https://grim-werewolf-66766.herokuapp.com/allBooking')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[])
    const handleCancel= id =>{
        console.log(id)
        fetch(`https://grim-werewolf-66766.herokuapp.com/cancelBook/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            },
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    useEffect(()=>{
        fetch('https://grim-werewolf-66766.herokuapp.com/bookingServices')
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[deleted])
    const onSubmit = data => {
        fetch('https://grim-werewolf-66766.herokuapp.com/addService' ,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount){
                setDeleted(true)
            }
            else{
                setDeleted(false)
            }
        })
        
    };
    const handleDelete= id =>{
        fetch(`https://grim-werewolf-66766.herokuapp.com/deleteBooking/${id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        console.log(id)
    }
    return (
        <div className="container">
            <div className="mt-5 pt-5  pb-5 text-center mt-5">
                <div>
                <Table striped bordered hover variant="dark" className="bg-dark">
                    <thead>
                        <tr>
                        <th>Hotel Name</th>
                        <th>Image</th>
                        <th>Control</th>
                        <th>Stutas</th>
                        </tr>
                    </thead>
                    
                        {
                            allOrders.map(order=><tbody variant="" className="p-5" key={order?._id}>
                                <td>{order?.name}</td>
                                <td><img src={order?.img} className="img-size" alt="" /></td>
                                <td className="text-center align-items-center"><button className="btn text-danger border-danger" onClick={()=>handleCancel(order?._id)}>Cancel</button></td>
                                <td className="text-center align-items-center"><button className="btn text-success border-success" >Pending</button></td>
                            </tbody>)
                        }

                </Table>
                </div>
            <h2 className="text-danger text-center pt-2 pb-2">Upload Booking Service </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="border-box p-5 bg-dark">
      <input {...register("name", { required: true })} placeholder="service name" className="w-25"/>
      <br />
      <br />
      <input type="number" {...register("price",  { required: true })} placeholder="service price" className="w-25"/>
      <br />
      <br />
      <input type="upload" {...register("img",  { required: true })} placeholder="Image url link here"className="w-25" />
      <br />
      <br />
          <textarea name="" {...register("description",  { required: true })}  id="" cols="40" rows="8" placeholder="service related describtion" className="w-75"></textarea>
          <br />
          <br />
      <input className="btn btn-danger" type="submit" />
    </form>
        </div>
        <br />
            <h2 className="text-center text-danger">Control Booking service</h2>
            <div className="pt-2 pb-4">
            <Table striped bordered hover variant="dark" className="bg-dark">
  <thead>
    <tr>
      <th>Hotel Name</th>
      <th>Image</th>
      <th>Control</th>
    </tr>
  </thead>
  
      {
          bookings.map(booking=><tbody variant="" className="p-5" key={booking?._id}>
              <td>{booking?.name}</td>
              <td><img src={booking?.img} className="img-size" alt="" /></td>
              <td className="text-center align-items-center"><button className="btn text-danger border-danger" onClick={()=>handleDelete(booking?._id)}>Delete</button></td>
          </tbody>)
      }

</Table>
            </div>
        
        </div>
    );
};

export default Manage;