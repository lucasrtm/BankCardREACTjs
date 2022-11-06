import React from "react";
import $ from 'jquery'
import './button.css'

export function Button(){
    const checkFields = ()=>{
        function showErrorBallon(classe){
            const patternBallon = $('.errorBallon')[0];
            const finalBallon = patternBallon.cloneNode(true);
            finalBallon.className = `errorBallon ${classe}`;
            $('.allContent')[0].appendChild(finalBallon);
            setTimeout(()=>{
               $('.allContent')[0].removeChild($(`.errorBallon.${classe}`)[0]);
            },3000);
        }
        if($('.inputName').val() == false){
            showErrorBallon('warningName')
        }
        if($('.inputCardNumber').val() == false || $('.inputCardNumber').val().length < 19){
            showErrorBallon('warningNumber')
        }
        if($('.inputXXYY')[0].value == false || $('.inputXXYY')[0].value.length != 2 || $('.inputXXYY')[1].value == false || $('.inputXXYY')[1].value.length != 2 || $('.inputCVC').val() == false || $('.inputCVC').val().length != 3){
            showErrorBallon('warningXXYYCVC')
        }
        if($('.inputName').val() && $('.inputCardNumber').val() && $('.inputCardNumber').val().length == 19 && $('.inputXXYY')[0].value.length == 2 && $('.inputXXYY')[1].value.length == 2 && $('.inputCVC').val().length == 3){
            $('.successScreen')[0].style.display = 'flex'
        }
    }
    return(
        <button className="submitButton" onClick={()=>checkFields()}>Confirm</button>
    )
}