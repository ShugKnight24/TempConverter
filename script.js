/* Hardcoded test
  var tempFahrenheit = 100;
  var tempCelsius;

  if (tempFahrenheit === 100) {
  console.log ((100 - 32)*(5/9));} \
*/

function fChange() {
  var input = document.getElementById("fTemp");
  var text = input.value;
  if ("fTemp") {
    document.getElementById("celsiusresult").innerHTML = input.value = ("The temperature is " + ((text - 32)*(5/9)) + " Degrees Celsius.");
    cTemp.value="";
    fTemp.value="";
  }
}

function cChange() {
  var input = document.getElementById("cTemp");
  var text = input.value;
  if ("cTemp") {
   document.getElementById("fahrenheitresult").innerHTML = input.value = ("The temperature is " + ((text * (9/5)) + 32) + " Degrees Fahrenheit.");
   cTemp.value="";
   fTemp.value="";
  }
 }
// if (!text)  {
//   alert("Hey, you have to enter in a number for it to work first silly!");
//   return;
// }


/* To test for later
convertTemp(212, "C"); // > 100
convertTemp(32, "C"); // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(-40, "F"); // > -40
*/
