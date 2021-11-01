import React from 'react';
import { useHistory } from 'react-router';
import notPage from '../../images/404.png'
import './notfound.css'

const NotFound = () => {
    const history = useHistory();
    const backHome = ()=>{
        history.push('/home')
    }
    return (
        <div className="notFound-page text-center">
            <img className="img-fluid mt-5" src={notPage} alt="" />
            <h3 className="text-warning mt-4">Page is not found click this button and go home!</h3>
            <button className="btn btn-danger p-3 mt-3" onClick={backHome}>Back Home</button>
        </div>
    );
};

export default NotFound;