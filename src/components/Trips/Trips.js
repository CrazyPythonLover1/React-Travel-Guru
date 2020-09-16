import React from 'react';
import './Trips.css';
import trip1 from '../../images/Image/Rectangle 1.png';
import trip2 from '../../images/Image/Sreemongol.png';
import trip3 from '../../images/Image/sundorbon.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Trips = ({handleHomepage,trip,id,handleTrip}) => {
    const activeStyle = {
        border: '3px solid orange',
    }
    return (
        <div>
            <div className="trip__option">
                <div className="trip__info">
                    <h1> {trip.name} </h1>
                    <p> {trip.description.substring(0,200)} </p>
                    <div className="button" onClick={handleHomepage}> <p>booking</p> <ArrowRightAltIcon/> </div>
                </div>

                <div className="trip__img">
                    <div className="img">
                        <img style={id===1?activeStyle:{border:"none"}} onClick={()=>handleTrip(1)} src={trip1} alt=""/>
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

export default Trips;