var d = new Date();
var day=d.getDate();
var month=d.getMonth()+1;
var year=d.getFullYear();
document.getElementById("demo").innerHTML = "Date: "+day+"/"+month+"/"+year;
var n = d.toLocaleTimeString();
document.getElementById('dem').innerHTML= "Time: "+n;

function myFunction() {
  alert("Thankyou For Your Response!");}