import React from 'react';
import Navbar from './Navbar';


const CardDetails = (prpos) => {

    const name= prpos.name

    return (
        <div>
            <Navbar/>
            <h1>{name}</h1>
        </div>
    );
};

export default CardDetails;