const tick1 = document.querySelector(".tick1");
const tick2 = document.querySelector(".tick2");
const cross = document.querySelector(".container-cross");
const check = document.querySelector(".container-tick");
const linx = document.querySelector('.linx');

const wit2 = 100 + "px";
const wit = 64 + "px";

// Conditions for tick
// if (successful){
//     cross.style.display = "none";
// const wit = 64 + "px";
// }
// if (unsuccessful){
// //Conditions for cross
// check.style.display = "none";
// const wit = 100 + "px";
// }

//wrong message disappear oder return
// linx.addEventListener('click',() => {
//     cross.style.display = "none";
// });





// const wit = getComputedStyle(tick1).width;
console.log(wit);
console.log(tick1.classList);


let i = 0;
let j = 0;
let tym1 = i + "px";
let tym2 = j + "px";

setTimeout(function(){ 
    const timer = setInterval(() => {
        console.log("hello");
        tym1 = i + "px";
        tick1.style.width = `${tym1}`;
        if (tym1 === wit) {
          clearInterval(timer);
        } else {
          i++;
        }
      
        console.log(tym1, i);
      }, 0.3);
 }, 800);

setTimeout(function(){ 
    const timer = setInterval(() => {
        console.log("hello");
        tym2 = j + "px";
        tick2.style.width = `${tym2}`;
        if (tym2 === wit2) {
          clearInterval(timer);
        } else {
          j++;
        }
      
        console.log(tym2, i);
      }, 0.1);
 }, 1100);

// if(cross === ".")

