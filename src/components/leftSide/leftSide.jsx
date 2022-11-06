import React from "react";
import './leftside.css';
import backgroundImgURL from '../../img/background-image.png'
import cardFrontSideImgURL from '../../img/card-front-side.png'
import cardBackSideImgURL from '../../img/card-back-side.png'

export function LeftSide(){
    return(
        <div className='leftSide'>
            <div className="leftBackground">
              <img src={backgroundImgURL} />
            </div>
            <div className='positionFrontCard'>
              <div className='contentFrontCard'>
                <img src={cardFrontSideImgURL} />
                <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
                <p className='numberInCard'>9591 6489 6389 101E</p>
                <p className='nameInCard'>Felicia Rocha</p>
                <div className='duaDateInCard'>
                    <p className='xxInCard'>09</p>
                    <p>/</p>
                    <p className='yyInCard'>25</p>
                </div>
              </div>
            </div>
            <div className='positionBackCard'>
                <div className='contentBackCard'>
                  <img src={cardBackSideImgURL} />
                  <p className='cvcInCard'>000</p>
                </div>
            </div>
        </div>
    )
}