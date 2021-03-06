import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import google from '../../../images/City/GButton.jpg'


const Login = () => {
    const {googleSignIn}=useFirebase()
    return (
        <div className="pt-5 mt-5 text-center">
            {/* google login button  */}
            <img src={google} alt=""  className="border-none pt-5 mt-5 pb-5 mb-5 img-fluid" onClick={googleSignIn}/>
        </div>
    );
};

export default Login;