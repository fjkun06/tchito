const blacSpan = document.querySelector(".white-theme");
const defSpan = document.querySelector(".default-theme");
const black = document.querySelector(".black");
const reset = document.querySelector(".default");
const login = document.querySelector("#log");
const register = document.querySelector("#reg");
const cover = document.querySelector(".container");

// cover.style.backgroundColor = "";
// if(cover.style.backgroundColor == "") {
//     defSpan.textContent = "Currently selected";
// }
defSpan.textContent = "Currently selected";

black.addEventListener("click", () => {
  if (cover.style.backgroundColor == "") {
    cover.style.backgroundColor = "rgba(0,0,0,0.75)"; ///main skin
    login.style.color = register.style.color = `white`;
    console.log("Hello black");
    blacSpan.textContent = "Currently selected";
    defSpan.textContent = "Switch to default";
  }
});

reset.addEventListener("click", () => {
  if (cover.style.backgroundColor != "") {
    cover.style.backgroundColor = ""; ///main skin
    login.style.color = register.style.color = ``;
    console.log("Hello def");
    defSpan.textContent = "Currently selected";
    blacSpan.textContent = "Switch to gray theme";
  }
});

// black.addEventListener('click', function () {
//     // cover.style.backgroundColor = "rgba(0,0,0,0.75)"; ///main skin
//     // login.style.color = register.style.color = `white`;
//     console.log("Hello def");
// });

// register.style.color = "black";
