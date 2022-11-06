import $ from 'jquery'

export function ShowError(target,element,isCvcXXorYY){
    if(target.target.value == false){
        $(element).addClass('active')
        if(isCvcXXorYY == true){
            $('.miniAlert.xxeyy').addClass('active')
        }
    }else{
        $(element).removeClass('active')
        $('.miniAlert.xxeyy').removeClass('active')
    }
}