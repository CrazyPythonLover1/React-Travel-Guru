import React from 'react';
import './Header.css';
import logo from '../../images/Logo.png'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Header = () => {
    return (
        <div class="header">
            <div className="header__left">
                <img src={logo} alt=""/>
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search your Destination" type="text"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__option">
                    <nav>
                        <Link to="/news"> News </Link>
                        <Link to="/destination"> Destination </Link>
                        <Link to="/blog"> Blog </Link>
                        <Link to="/contact" > Contact </Link>
                        <Button variant="contained" color="orange">
                            <Link to="/login" > Login </Link>
                        </Button>
                        
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;