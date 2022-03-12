import { Button } from '@mui/material';
import React from 'react';
import '../css/style.css';
import logo from '../images/myreward_logo.png';
import SearchField from "react-search-field";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const Navbar = () => {
  return (
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
            <div class="nav-title">
            <img src={logo} alt="My Rewards" style={{"height": "50px"}} />
            </div>
        </div>
        <div class="nav-btn">
            <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        
        <div class="nav-links">
            <SearchField
                placeholder="Type your Search here..."
                //   onChange={onChange}
                searchText=""
                className="searchBar"
            />
            <div className="navButtons">
                <ColorButton className="navButton" variant="contained" >SIGN UP FOR FREE</ColorButton>
                <Button className="navButton" variant="outlined">SIGN IN</Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar