import React from "react";
import './input.css';
import $ from 'jquery';
import 'jquery-mask-plugin';
import { ShowError } from "../../methods/showError";

export const InputPattern = function(props){
    if(props.tipo == 'name'){
        return(
            <input onKeyDown={e=>{
                if(e.which == 13){
                    $('.inputCardNumber')[0].focus();
                };
                if(isNaN(e.key) == false){
                    if(e.which == 9 || e.which == 8 || e.which == 32){
                        return
                    }
                    e.preventDefault();
                };
            }}
            onChange={(e)=>{$('.nameInCard')[0].innerHTML = e.target.value}} onBlur={(e)=>{ShowError(e,'.inputBlock.name')}} className="inputName" type="text" maxLength={25} placeholder="e.g. Jane Appeseed" />
        )
    }else if(props.tipo == 'cardNumber'){
        return(
            <input  onKeyDown={e => {
                if(e.which == 13){
                    $('.inputXXYY')[0].focus();
                };
                if(isNaN(e.key) || e.which == 32){
                    if(e.which == 9 || e.which == 8){
                        return
                    }
                    e.preventDefault();
                };
            }} 
            onChange={(e)=>{
                $('.numberInCard')[0].innerHTML = e.target.value;
                if(e.target.value.length == 19){
                    $('.inputXXYY')[0].focus();
                };
            }} 
            onBlur={(e)=>{ShowError(e,'.inputBlock.cardNumber')}} className="inputCardNumber" type="text" maxLength={16}  placeholder="e.g. 4002 8922 0007 2321" />
        )
    }else if(props.tipo == 'xx' || props.tipo == 'yy'){
        return(
            <input onChange={e=>{
                if(props.tipo == 'xx'){
                    $('.xxInCard')[0].innerHTML = e.target.value;
                    if(e.target.value.length == 2){
                        console.log('kkk')
                        $('.inputXXYY')[1].focus()
                    }
                }else if(props.tipo == 'yy'){
                    $('.yyInCard')[0].innerHTML = e.target.value;
                    if(e.target.value.length == 2){
                        $('.inputCVC')[0].focus()
                    }
                };
            }}
            onBlur={(e)=>{
                if(props.tipo == 'xx'){
                    ShowError(e,'.borderEffectError.xx',true).addClass('active');
                }else if(props.tipo == 'yy'){
                    ShowError(e,'.borderEffectError.yy',true).addClass('active');
                };
            }}
            className="inputXXYY" type="text" maxLength={2} placeholder="**" />
        )
    }else if(props.tipo == 'cvc'){
        return(
            <input onChange={(e)=>{$('.cvcInCard')[0].innerHTML = e.target.value}} onBlur={(e)=>{ShowError(e,'.borderEffectError.cvc',true)}} className="inputCVC" type="text" maxLength={3} placeholder="e.g. 123" />
        )
    }
}