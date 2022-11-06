import $ from 'jquery'
import 'jquery-mask-plugin'
function masks(){
    $('document').ready(()=>{
        $('.inputCardNumber').mask('9999 9999 9999 9999');
        $('.inputXXYY').mask('99');
        $('.inputCVC').mask('999');
      })
}
export default masks