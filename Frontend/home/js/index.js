const triangle = document.querySelector('.triangle1');
const triangle2 = document.querySelector('.triangle2');
const triangle3 = document.querySelector('.triangle3');
const mops = document.querySelector('.middle-options');
const add = document.querySelector('.add');
const new1 = document.querySelector('.new');
const middle = document.querySelector('.middle');


add.addEventListener('click', () => {
    console.log('new chat');
    // triangle.style.display.toggle("none")
    triangle.style.display = mops.style.display = triangle3.style.display = "block";
    new1.style.display = triangle2.style.display = "none";
    add.style.color = '#002244'; 
    middle.style.backgroundColor = 'rgba(238, 240, 241, 0.1)'; 
});

triangle3.addEventListener('click', () => {
    console.log('new chat');
    add.style.color = ''; 
    triangle.style.display = mops.style.display = triangle3.style.display = "none";
    new1.style.display = triangle2.style.display = "block";
    middle.style.backgroundColor = ''; 

});