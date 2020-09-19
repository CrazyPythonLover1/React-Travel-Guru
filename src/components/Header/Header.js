import React from 'react';
import './Header.css';
import logo from '../../images/Frame.png'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt=""/>
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search your Destination..." type="text"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__option">
                     <Link className='link' to="/home"> Home </Link>
                </div>
                <div className="header__option">
                     <Link className='link' to="/news"> News </Link>
                </div>
                <div className="header__option">
                    <Link className='link' to="/destination"> Destination </Link>
                </div>
                <div className="header__option">
                    <Link className='link' to="/blog"> Blog </Link>
                </div>
                <div className="header__option">
                    <Link className='link' to="/contact" > Contact </Link>
                </div>
                <div className="header__option">
                    <Button variant="contained" style={{background:"orange",textTransform:"capitalize", padding:"3px 30px"}}>
                        <Link className='link' to="/login" style={{color:"black",fontWeight:"bold"}} > Login </Link>
                    </Button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Header;