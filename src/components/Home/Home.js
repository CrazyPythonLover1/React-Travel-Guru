import React, { useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import tripData from '../../fakeData/trips'
import trip1 from '../../images/Image/Rectangle 1.png';
import trip2 from '../../images/Image/Sreemongol.png';
import trip3 from '../../images/Image/sundorbon.png';
import { Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Home = () => {
    const [trips, setTrips] = useState(tripData);
    const [id, setId] = useState(1)
    const trip = trips.find(tp => tp.id === id)

    const handleTrip = (id) => {
        setId(id);
    }
    
    const activeStyle = {
        border: '3px solid orange',
    }
    return (
        <div  className="home">
            <Header/>

            <div className="trip__option">
                <div className="trip__info">
                    <h1> {trip.name} </h1>
                    <p> {trip.description} </p>
                    <div className="button"> <p>booking</p> <ArrowRightAltIcon/> </div>
                </div>

                <div className="trip__img">
                    <div className="img">
                        <img style={id===1?activeStyle:{}} onClick={()=>handleTrip(1)} src={trip1} alt=""/>
                        <h3> COX'S BAZAR </h3>
                    </div>
                    <div className="img">
                        <img style={id===2?activeStyle:{}} onClick={()=>handleTrip(2)} src={trip2} alt=""/>
                        <h3> SREEMANGAL</h3>
                    </div>
                    <div className="img">
                        <img style={id===3?activeStyle:{}} onClick={()=>handleTrip(3)} src={trip3} alt=""/>
                        <h3> SUNDARBAN </h3>
                    </div>
                </div>

            </div>
        
        </div>
    );
};

export default Home;