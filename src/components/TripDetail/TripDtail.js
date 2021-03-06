import React from 'react';
import './TripDetail.css';
import { Link } from 'react-router-dom';
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
                    <input type="text" name="origin" placeholder="Dhaka"/> <br/>
                    <label for="destination"> Destination</label>  <br/>
                    <input type="text" name="destination" placeholder={trip.name}  /> <br/>
                    <div className="date__options">
                        <div className="date__option">
                            <label for=""> From </label> <br/>
                            <input className="date" type="date" name="from" id=""/>
                        </div>
                        <div className="date__option">
                            <label for=""> To </label> <br/>
                            <input className="date" type="date" name="to" id=""/>
                        </div>
                    </div>
                    <Link  style={{color: "black", textDecoration:"none"}} to="/booking">
                    <div className="link__button">
                     Start Booking 
                    </div>
                    </Link>
                     
                </form>
            </div>
        </div>
    );
};
export default TripDtail;