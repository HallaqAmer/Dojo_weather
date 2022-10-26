
function show_message() {
    alert("Loading weather report");
}

function remove_cookie() {
    var cookie=document.querySelector(".cookie-policy");
    cookie.remove();
}

function convert_temperature(element) {
    console.log(element.value);
    var temptype=element.value;
    for(var i=1;i<9;i++) {

        var tempNum=document.querySelector("#temp"+i);
        var tempVal=parseInt(tempNum.innerText);
        // console.log(tempNum);
        // console.log(tempVal);
        if(temptype=="°C") {
            tempNum.innerText=convert_f2c(tempVal);
        }
        else {
            tempNum.innerText=convert_c2f(tempVal);
        }
        
    }
}

function convert_c2f (temp) {

    return Math.round(9/5*temp+32);

}

function convert_f2c (temp) {

    return Math.round(5/9*(temp-32));
}