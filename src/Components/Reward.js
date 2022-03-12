import React from 'react';
import '../css/style.css';
import rewardPic from '../images/reward-pic.jpg';

const Reward = () => {
  return (
        <div className="rewardBlock1">
            <div className="rewardDescription">
                <div className="rewardDescriptionHeader">
                    <p>WHAT IS MY REWARDS?</p>
                </div>
                <div className="rewardDescriptionSubHeader">
                    <p>Start every shop with my rewards</p>
                </div>
                <hr/>
                <div className="rewardDescriptionContent">
                    <p>My Rewards rewards smart shoppers. Every time you shop through My Rewards at over 4,500 Australian and international retailers you are rewarded with either a cashback or discount</p>
                </div>
            </div>
            <img className="rewardPicture" src={rewardPic} alt="" />
        </div>
  )
}

export default Reward