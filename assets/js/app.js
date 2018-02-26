console.log("Hello World");

var stage = (function epate(){
var menu, burger;

    window.onload = function init(){

        menu = document.querySelector(".menu");
        burger = document.getElementById("burger");

        menu.addEventListener("click", function(){
            burger.classList.toggle("navbar");
            console.log("hello");
        });
    };

})();
