function get_paragraph_1(){

    var inputs = [];
    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("para_1_input_"+i).value);
         document.getElementById("show_paragraph_1").innerHTML=inputs.join(". ");
    }
}
function get_paragraph_2(){

    var inputs = [];
    for(var j=7; j<=12; j++){
        inputs.push(document.getElementById("para_2_input_"+j).value);
         document.getElementById("show_paragraph_2").innerHTML=inputs.join(". ");
    }
}