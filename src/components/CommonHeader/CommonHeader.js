import React from 'react';
import logo from '../../images/Logo.png'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Header = () => {
    const style = {
        color: 'black',
    }
    const headerRight={
        float: 'right',
    }
    const headerLogo ={
    }
    
    return (
        <div  className="header">
            <div style={headerLogo} className="header__left">
                <img src={logo} alt=""/>
                
            </div>
            <div style={headerRight} className="header__right">
                <div className="header__option">
                     <Link style={style} className='link' to="/news"> News </Link>
                </div>
                <div className="header__option">
                    <Link style={style} className='link' to="/destination"> Destination </Link>
                </div>
                <div className="header__option">
                    <Link style={style} className='link' to="/blog"> Blog </Link>
                </div>
                <div className="header__option">
                    <Link style={style} className='link' to="/contact" > Contact </Link>
                </div>
                <div className="header__option">
                    <Button variant="contained" style={{background:"orange",textTransform:"capitalize", padding:"3px 30px"}}>
                        <Link  className='link' to="/login" style={{color:"black",fontWeight:"bold"}} > Login </Link>
                    </Button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Header;