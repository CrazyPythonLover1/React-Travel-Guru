import React, { useState, useContext } from 'react';
import './Home.css'
import Trips from '../Trips/Trips';
import TripDtail from '../TripDetail/TripDtail';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Home = () => {
    const [loggedInUser, setLoggedInUser,trip, id, setId] = useContext(UserContext);


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