
$(document).ready(function(){
    $('#go').click(function(){
        console.log("ooooo");
        document.getElementById('ldr').classList.remove('play');
        document.getElementById('linx').classList.add('show');
        setTimeout(
            function(){
                document.getElementById('linx').click();
            }, 6000);
    });
    let body = document.querySelector('body');

    function start () {
        console.log("ooooo");
        document.getElementById('ldr').classList.remove('play');
        document.getElementById('linx').classList.add('show');
        setTimeout(
            function(){
                document.getElementById('linx').click();
            }, 6000);
    }
    
    body.onload = start();
});