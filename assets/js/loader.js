/* ===========================
        WEBSITE LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hide");

            setTimeout(() => {

                loader.remove();

            }, 700);

        }, 1500);

    }

});