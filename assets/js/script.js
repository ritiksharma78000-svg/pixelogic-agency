/* ==========================================
        PIXELOGIC APP
========================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    console.log("%c🚀 Pixelogic V4 Loaded Successfully!", "color:#2563EB;font-size:16px;font-weight:bold;");

    console.log("✅ All Modules Loaded");

});
window.addEventListener("scroll",()=>{

    const header=document.querySelector(".header");

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});