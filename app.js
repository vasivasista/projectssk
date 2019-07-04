// //jshint esversion : 6
// function percent(){
// var number1=   Number(document.getElementByid("num1").value);
// alert(number1);
//
// }
document.getElementById('button').addEventListener("click", function(){
  var number1=   Number(document.getElementById("num1").value);
  var number2=   Number(document.getElementById("num2").value);
  result = (number1 * number2)/100;

  alert(`you will get ${result} ` );
});
