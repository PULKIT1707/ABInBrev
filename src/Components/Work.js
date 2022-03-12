import { Button } from '@mui/material';
import React from 'react';
import '../css/style.css';
import rewardPic from '../images/reward-pic.jpg'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const Work = () => {
  return (
    <>
    <div className="rewardBlock1">
        <img className="rewardPicture" src={rewardPic} alt="" />
        <div className="rewardDescription">
            <div className="rewardDescriptionHeader">
                <p>EASY AS.</p>
            </div>
            <div className="rewardDescriptionSubHeader">
                <p>How does My Rewards work?</p>
            </div>
            <hr/>
            <div className="rewardDescriptionContent">
                <p>Search for an item, service, brand or experience -or browse our categories.</p>              
                <p>For cashback offers you will be redirected to the retailer's website. For others there is a coupon code.</p>
            </div>
            <ColorButton variant="contained" >SIGN UP FOR FREE</ColorButton>
        </div>
        <div className="rewardBlock1"> 
            <img className="rewardPicture" src={rewardPic} alt="" />
            <div className="rewardDescription">
                <div className="rewardDescriptionSubHeader">
                    <p>Save all your favourite deals for easy exploring.</p>
                </div>
                <hr/>
                <div className="rewardDescriptionContent">
                    <p>My Rewards rewards smart shoppers. Every time you shop through My Rewards at over 4,500 Australian and international retailers you are rewarded with either a cashback or discount</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Work