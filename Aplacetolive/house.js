"use strict";

const  closenav = document.querySelector(".closebtn");
const opennav = document.querySelector(".nav-icon");
opennav.addEventListener("click", function () {
  console.log("cliked");
  document.querySelector(".side-bar").classList.remove("close");
});
closenav.addEventListener('click' ,function(){
  document.querySelector(".side-bar").classList.add("close");
})


