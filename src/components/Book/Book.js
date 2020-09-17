import React, { useContext } from 'react';
import "./Book.css";
import { UserContext } from '../../App';

const Book = () => {
    const [loggedInUser, setLoggedInUser,trip, id, setId] = useContext(UserContext);
    return (
    <>
        <div className="Booking">
            
            <div className="booking__left">
                <div className="booking__title">
                    <p> 252 stays Apr 13-17 3 guests </p>
                    <h1> Stay in {trip.name} </h1>
                </div>
                <div className="hotel__options">
                    {
                        trip.hotels.map(hotel=><div className="hotel__option">
                                                    <div className="hotel__img">
                                                        <img src={hotel.picture} alt=""/>
                                                    </div>
                                                    <div className="hotel__info">
                                                        <h2> {hotel.title} </h2>
                                                        <p>4guests 2beds 2baths</p>
                                                        <p> {hotel.des} </p>
                                                        <p> {hotel.cancelation} </p>
                                                        <h4> ${hotel.price}/night </h4>
                                                    </div>
                                                </div>)
                    }
                </div>

            </div>

            <div className="booking__right">
                map
            </div>
            
        </div>
    </>
    );
};

export default Book;