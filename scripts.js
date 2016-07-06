/* Hardcoded test
  var tempFahrenheit = 100;
  var tempCelsius;

  if (tempFahrenheit === 100) {
  console.log ((100 - 32)*(5/9));} */

/*From Fahrenheit to Celsius*/
function fChange() {
  var input = document.getElementById("fTemp");
  var text = input.value;

  if (!text)  {
    alert("You have to enter a number for it to work first!");
    return;
  } else if ("fTemp") {
    document.getElementById("result").innerHTML = input.value = ("The temperature is " + ((text - 32)*(5/9)) + " Degrees Celsius.");
    cTemp.value="";
    fTemp.value="";
  }
}

/*From Celsius to Fahrenheit*/
function cChange() {
  var input = document.getElementById("cTemp");
  var text = input.value;
  if (!text)  {
    alert("You have to enter in a number for it to work first!");
    return;
  } else if ("cTemp") {
   document.getElementById("result").innerHTML = input.value = ("The temperature is " + ((text * (9/5)) + 32) + " Degrees Fahrenheit.");
   cTemp.value="";
   fTemp.value="";
  }
 }

/* To test for later
convertTemp(212, "C"); // > 100
convertTemp(32, "C"); // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(-40, "F"); // > -40
*/
