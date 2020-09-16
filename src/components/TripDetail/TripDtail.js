import React from 'react';
import './TripDetail.css';
const TripDtail = ({trip}) => {
    return (
        <div className="trip__option">
            <div className="trip__info">
                    <h1> {trip.name} </h1>
                    <p> {trip.description} </p>
            </div>
            <div className="book__details">
                <form action="">
                    <label for="origin"> Origin</label> <br/>
                    <input type="text" name="origin" value="Dhaka"/> <br/>
                    <label for="destination"> Destination</label>  <br/>
                    <input type="text" name="destination" value={trip.name}/> <br/>
                    <button type="submit"> Start Booking </button>
                </form>
            </div>
        </div>
    );
};
export default TripDtail;