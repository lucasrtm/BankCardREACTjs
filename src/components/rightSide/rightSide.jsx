import React from "react";
import { InputPattern } from '../input/input';
import { Button } from '../button/button'
import './rightside.css';
import warningImgURL from '../../assets/img/icon-warning.png'
import masks from '../../methods/masks'
masks()

export function RightSide(){
    return(
        <div className='rightSide'>
          <div className='allContent'>
            <div className='successScreen'>
              <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
              <div>
                <h1>THANK YOU!</h1>
                <h3>We've added your card details</h3>
              </div>
              <button className="continueButton">Continue</button>
            </div>
            <div className='errorBallon'>
              <p><img src={warningImgURL} /> CHECK THIS FIELD</p>
            </div>
            <form >
                <div className='inputBlock name'>
                  <label>CARDHOLDER NAME</label> <br />
                  <InputPattern tipo='name' /> <br />
                  <span className='miniAlert nome'>Can't be blank</span>
                </div>
                <div className='inputBlock cardNumber'>
                  <label>CARD NUMBER</label> <br />
                  <InputPattern tipo='cardNumber' /> <br />
                  <span className='miniAlert numeracao'>Can't be blank</span>
                </div>
                <div className='inputBlock xxyycvc'>
                  <label>EXP. DATE (MM/YY)</label>
                  <label>CVC</label>
                  <div className='ultimosInputs'>
                    <div className='borderEffectError xx'>
                      <InputPattern tipo='xx' />
                    </div>
                    <div className='borderEffectError yy'>
                      <InputPattern tipo='yy' />
                    </div>
                    <div className='borderEffectError cvc'>
                      <InputPattern tipo='cvc' />
                    </div>
                  </div>
                  <span className='miniAlert xxeyy'>Can't be blank</span>
                </div>
            </form>
            <Button>Confirm</Button>
          </div>
        </div>
    )
}