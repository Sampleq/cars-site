/*
document.getElementsByClassName("main-title")[0].style.color = "green"; 
*/

document.getElementById("main-action").onclick = function() {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {  /* var  можно не добавлять в начальные условия - т.е не задавать явно i*/
    buttons[i].onclick = function() {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}


/* document.getElementsByClassName("car-button")[0].style.color = "blue";
*/

document.getElementById("price-action").onclick = function() {
    if (document.getElementById("name").value ==="") {
        alert("Введите имя");
    } else if (document.getElementById("phone").value ==="") {
        alert("Введите phone");
    } else if (document.getElementById("car").value ==="") {
        alert("Введите car");
    } else {
         alert("Fine! Got it!");
    }
}


/* where is ERROR??:

var buttons = getElementsByClassName("car-button");     /* DOCUMENT.getElementsByClassName 
for ( var i = o; i < buttons.lenght; i++) {      /* i=0 lengTH
    buttons[i].onclick = function() {
    document.getElementById("price").scrollIntoView({behavior: "smooth"}); 
    } 
}
*/


/* 2 X3

var buttons = getElementsByClassName("car-button");
for ( var i = 0; i < 6; i++) {
    buttons[i].onclick = function() {
    document.getElementById("price").scrollIntoView({behavior: "smooth"}); 
    } 
}

*/

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * -0.15) / 8) + 'px,' + ((event.clientY * -0.15) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.4 * window.pageYOffset) + 'px';
})
});