const desc1 = document.getElementById("desc1")
const desc2 = document.getElementById("desc2")
const desc3 = document.getElementById("desc3")

let bottomValue1 = 0 - (desc1.offsetHeight  - document.querySelector("#desc1 > h1").offsetHeight)
let bottomValue2 = 0 - (desc2.offsetHeight  - document.querySelector("#desc2 > h1").offsetHeight)
let bottomValue3 = 0 - (desc3.offsetHeight  - document.querySelector("#desc3 > h1").offsetHeight)

// desc1.addEventListener("mouseover", function( event ) {
//     // on met l'accent sur la cible de mouseover
//     desc1.style.marginBottom = "0px";
//     console.log("bite")
//   }, false);
//   desc1.addEventListener("mouseout", function( event ) {
//     // on met l'accent sur la cible de mouseover
//     desc1.style.marginBottom = "-540px";
//     console.log("bite3")
//   }, false);