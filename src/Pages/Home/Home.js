import React from 'react';
import Offers from '../../Services/Offers/Offers';
import Banner from '../Banner/Banner';
import City from '../City/City';
import Tour from '../Tuor/Tour';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tour></Tour>
            <City></City>
            <Offers></Offers>
        </div>
    );
};

export default Home;