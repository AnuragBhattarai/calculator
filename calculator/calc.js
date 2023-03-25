// function onearea(){
//     var x = (document.getElementById("input1").value);
//     var y = (document.getElementById("input2").value);
//     let area = triArea(x , y);
//     console.log(area);
//     document.getElementById("answer").value =area;
    
//     function triArea(base , hight){
//      let y = base * hight;
//      let area = y / 2;
//      return area;
//     }}


 var currentnolocation = "";
 var secondarynolocation = "";

$(document).ready(function() { 
    $('#button1').click(function() { 
       
       number1(); 
       t = y;
       boom();
    }); 
}); 



$(document).ready(function() { 
    $('#button2').click(function() { 
       number2(); 

       t = y;
       boom();
    }); 
}); 

$(document).ready(function() { 
    $('#button3').click(function() { 
       
       number3(); 
       t = y;
       boom();
    }); 
}); 

$(document).ready(function() { 
    $('#button4').click(function() { 
       
       number4(); 
       t = y;
       boom();
    }); 
}); 
$(document).ready(function() { 
    $('#button5').click(function() { 
       
       number5(); 
       t = y;
       boom();
    }); 
}); 

$(document).ready(function() { 
    $('#button6').click(function() { 
       
       number6(); 
       t = y;
       boom();
    }); 
}); 

$(document).ready(function() { 
    $('#button7').click(function() { 
       
       number7(); 
       t = y;
       boom();
    }); 
}); 

$(document).ready(function() { 
    $('#button8').click(function() { 
       
       number8(); 
       t = y;
       boom();
    }); 
}); 

$(document).ready(function() { 
    $('#button9').click(function() { 
       
       number9(); 
       t = y;
       boom();
    }); 
}); 




$(document).ready(function() { 
    $('#buttonadd').click(function() { 
        symbol();

        signfinal = sign;

       signs();
       secondarynolocation = t;
       t = 0;
    }); 
}); 

$(document).ready(function() { 
    $('#buttoncalculate').click(function() { 
      ans();
      finalans = ansno;
      printans();
    }); 
}); 



$(document).ready(function() { 
    $('#clearbtn').click(function() { 
        reset();
    }); 
}); 

$(document).ready(function() { 
    $('#buttonsubtract').click(function() { 
        symbol2();

        signfinal = sign;

       signs();
       secondarynolocation = t;
       t = 0;
    }); 
}); 

$(document).ready(function() { 
    $('#buttonmult').click(function() { 
        symbol3();

        signfinal = sign;

       signs();
       secondarynolocation = t;
       t = 0;
    }); 
}); 

$(document).ready(function() { 
    $('#buttondiv').click(function() { 
        symbol1();

        signfinal = sign;

       signs();
       secondarynolocation = t;
       t = 0;
    }); 
}); 










function reset(){
    document.getElementById("displaysymbolvalue").innerHTML= ".";
    document.getElementById("displayvalue").value= "";
    t = "0";
    secondarynolocation = "0";
    return t , secondarynolocation;
}

function signs(){
    document.getElementById("displaysymbolvalue").innerHTML= signfinal;
    document.getElementById("displayvalue").value= "0";
}


function boom(){
    document.getElementById("displayvalue").value= t;
}


    function number1(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "1";
        }
        else{
            val = val + "1";
        }
        y= val;
        return y;
    }

    function number2(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "2";
        }
        else{
            val = val + "2";
        }
        y= val;
        return y;
    }

    
    function number3(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "3";
        }
        else{
            val = val + "3";
        }
        y= val;
        return y;
    }

    
    function number4(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "4";
        }
        else{
            val = val + "4";
        }
        y= val;
        return y;
    }

    
    function number5(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "5";
        }
        else{
            val = val + "5";
        }
        y= val;
        return y;
    }

    
    function number6(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "6";
        }
        else{
            val = val + "6";
        }
        y= val;
        return y;
    }

    
    function number7(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "7";
        }
        else{
            val = val + "7";
        }
        y= val;
        return y;
    }

    
    function number8(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "8";
        }
        else{
            val = val + "8";
        }
        y= val;
        return y;
    }

    
    function number9(){

        var x = document.getElementById("displayvalue").value;
        if(x == 0){
            val = "9";
        }
        else{
            val = val + "9";
        }
        y= val;
        return y;
    }




    function symbol1(){
        sign = "div";
        return sign ; 
    }

    function symbol2(){
        sign = "sub";
        return sign ; 
    }

    function symbol3(){
        sign = "mult";
        return sign ; 
    }
    
    function symbol(){
        sign = "Add";
        return sign ; 
    }

    function ans(){
       var xx = parseInt(secondarynolocation);
       var yy = parseInt(t);
        if(signfinal == "Add"){
            sum = xx + yy;
            ansno = sum;
            return ansno;
        }
        
        else if(signfinal == "sub"){
            sub = xx - yy;
            ansno = sub ;
            return ansno;
        }

        else if(signfinal == "mult"){
            sub = xx * yy;
            ansno = sub ;
            return ansno;
        }

        else if(signfinal == "div"){
            sub = xx / yy;
            ansno = sub ;
            return ansno;
        }

        else{
            ansno = "fuv";
            return ansno;
        }
 
    }

    function printans(){
        document.getElementById("displayvalue").value = finalans;
    }



    