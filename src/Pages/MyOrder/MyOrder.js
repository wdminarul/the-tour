import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const MyOrder = () => {
    const [orders,setOrders]  = useState([]);
    const {user} = useFirebase()
    const email = user?.email ;
    useEffect(()=>{
        fetch(`https://grim-werewolf-66766.herokuapp.com/myOrder/${email}`)
        .then(res=>res.json())
        .then(result=>setOrders(result))
        console.log(orders)
    },[email])
    const handleCancel= id =>{
        fetch(`https://grim-werewolf-66766.herokuapp.com/cancelBook/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            },
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="pt-5 mt-5">
            <div className="container">
            <h2 className="text-danger text-center m-5 p5">Your Booked Service</h2>
            <hr />
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
                            orders.map(order=><tbody variant="" className="p-5" key={order?._id}>
                                <td>{order?.name}</td>
                                <td><img src={order?.img} className="img-size" alt="" /></td>
                                <td className="text-center align-items-center"><button className="btn text-danger border-danger" onClick={()=>handleCancel(order?._id)}>Cancel</button></td>
                                <td className="text-center align-items-center"><button className="btn text-success border-success" >Pending</button></td>
                            </tbody>)
                        }

                </Table>
            </div>        
        </div>
    );
};

export default MyOrder;