/* ===========================
      WHATSAPP REDIRECT
=========================== */

function openWhatsApp() {

    const message = encodeURIComponent(
        "Hi Pixelogic, I have submitted the contact form and I'm interested in your web development services."
    );

    window.open(
        `https://wa.me/918601372054?text=${message}`,
        "_blank"
    );

}