/* ===========================
      SUCCESS POPUP
=========================== */

function showSuccessPopup(form, button) {

    // 🎉 Confetti Animation
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

    setTimeout(() => {

        confetti({
            particleCount: 80,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 80,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

    }, 300);

    Swal.fire({
    icon: "success",
    title: "Message Sent Successfully! 🎉",
    html: `
        <b>Thank you for contacting Pixelogic.</b><br><br>
        Your inquiry has been received successfully.<br>
        Our team will contact you within <b>24 hours</b>.
    `,
    confirmButtonText: "Awesome!",
    confirmButtonColor: "#2563EB",

    showDenyButton: true,
    denyButtonText: "💬 Chat on WhatsApp",
    denyButtonColor: "#25D366"

}).then((result) => {

    // Awesome button
    if (result.isConfirmed) {

        window.location.href = "thank-you.html";

    }

    // WhatsApp button
    if (result.isDenied) {

        openWhatsApp();

    }

});

}
