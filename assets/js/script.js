//js
// example 1
function showDate(){
  document.getElementById('sd').innerHTML=Date();
}

// example 2
function showDate2(){
  document.getElementById('sdate').innerHTML=Date();
}

// example 3
function showText(){
  document.getElementById('stext').innerHTML='Hello World!';
}

// example 4
function bulbOn(){
  document.getElementById("bulb").src="assets/image/on.gif";
}
function bulbOff(){
  document.getElementById("bulb").src="assets/image/off.gif";
}

// example 5
function changeStyle(){
  document.getElementById("style").style.color="red";
}

// example 6
function show_text(){
  document.getElementById("show_hide").style.display="block";
}
function hide_text(){
  document.getElementById("show_hide").style.display="none";
}

// example 7
function dWrite(){
  
    $num1 = 5;
    $num2 = 4;

    document.write($num1 + $num2);
  }

// example 8
function waleart(){
  alert(5 + 5);
}

// example 9
function cLog(){
  console.log(5 + 5);
}

// example 9
function wPrint(){
  window.print();
}

// JS- loops, arrays, variable, operator, if condition,data type