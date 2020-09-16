import React, { useState } from 'react';
import './Home.css'
import tripData from '../../fakeData/trips'
import Header from '../Header/Header';
import Trips from '../Trips/Trips';
import TripDtail from '../TripDetail/TripDtail';

const Home = () => {
    const [trips, setTrips] = useState(tripData);
    const [id, setId] = useState(1)
    const trip = trips.find(tp => tp.id === id)
    const [homepage, setHomepage] = useState(true);
    const handleHomepage = ()=>{
        setHomepage(false);
    }

    const handleTrip = (id) => {
        setId(id);
    }
    return (
        <div  className="home">
            <Header/>
            {homepage?<Trips 
            handleHomepage={handleHomepage}
             trip={trip}
             handleTrip={handleTrip}
             id={id}
             />:<TripDtail trip={trip}/>}
        </div>
    );
};

export default Home;