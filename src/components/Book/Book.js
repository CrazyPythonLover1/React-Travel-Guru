import React, { useContext } from 'react';
import "./Book.css";
import CommonHeader from '../CommonHeader/CommonHeader';
import { UserContext } from '../../App';
import startIcon from '../../images/Icon/star_1_.png'
import { MapContainer, WrappedMap } from '../MapContainer/MapContainer';


const Book = () => {
    const [loggedInUser, setLoggedInUser, trip, id, setId] = useContext(UserContext);
    
    return (
        <>
            <CommonHeader />
            <div className="Booking">

                <div className="booking__left">
                    <div className="booking__title">
                        <p> 252 stays Apr 13-17 3 guests </p>
                        <h1> Stay in {trip.name} </h1>
                    </div>
                    <div className="hotel__options">
                        {
                            trip.hotels.map(hotel => <div className="hotel__option">
                                <div className="hotel__img">
                                    <img src={hotel.picture} alt="" />
                                </div>
                                <div className="hotel__info">
                                    <h2> {hotel.title} </h2>
                                    <p>4guests 2beds 2baths</p>
                                    <p> {hotel.des} </p>
                                    <p> {hotel.cancelation} </p>
                                    <p className="hotel__start"> <img src={startIcon} alt=""/> <strong> 4.9[32]  ${hotel.price}/night  </strong> </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                
                <div className="map" style={{width:'40vw',height:'100vh'}}> 
                    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>  

            </div>
        </>
    );
};

export default Book;