const blacSpan = document.querySelector(".white-theme");
const defSpan = document.querySelector("#w-theme");
const black = document.querySelector("#white");
const reset = document.querySelector("#main-def");
const login = document.querySelector("#log");
const register = document.querySelector("#reg");
const cover = document.querySelector("body");
const main = document.querySelector(".main");

defSpan.textContent = "Currently selected";

black.addEventListener("click", () => {
  if (main.style.backgroundColor) {
    cover.style.backgroundColor = "rgba(0,0,0,0.75)";
    main.style.backgroundColor = "rgba(0,0,0,0.01)"; ///main skin
    login.style.color = register.style.color = `white`;
    console.log("Hello black");
    blacSpan.textContent = "Currently selected";
    defSpan.textContent = "Switch to default";
  }
});

reset.addEventListener("click", () => {
  if (main.style.backgroundColor != "") {
    cover.style.backgroundColor = "#6840f5"; ///main skin
    main.style.backgroundColor = "#6840f5"; ///main skin
    login.style.color = register.style.color = ``;
    console.log("Hello def");
    defSpan.textContent = "Currently selected";
    blacSpan.textContent = "Switch to gray theme";
  }
});
