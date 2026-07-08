/* ===========================
        EMAILJS INIT
=========================== */

emailjs.init({
    publicKey: "E-jkLoyH5iT8v8YwC",
});

/* ===========================
      CONTACT FORM
=========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = this.querySelector("button");

        button.disabled = true;

        button.classList.add("btn-loading");

        button.innerHTML = `
            <div class="spinner"></div>
            Sending...
        `;

        sendContactForm(this, button);

    });

}
/* ===========================
      SEND CONTACT FORM
=========================== */

function sendContactForm(form, button) {

    emailjs.sendForm(
        "service_mbeueza",
        "template_fhqrz4j",
        form
    )

    .then((response) => {

        console.log("✅ Email Sent Successfully", response);

        // Auto Reply Email
        emailjs.send(
            "service_mbeueza",
            "template_kx73wsc",
            {
                from_name: form.from_name.value,
                from_email: form.from_email.value,
                service: form.service.value
            }
        );

        showSuccessPopup(form, button);

    })

    .catch((error) => {

        console.error("❌ EmailJS Error:", error);

        Swal.fire({

            icon: "error",

            title: "Oops...",

            text: "Failed to send your message. Please try again.",

            confirmButtonColor: "#2563EB"

        });

        button.disabled = false;

        button.classList.remove("btn-loading");

        button.innerHTML = "Get Free Quote";

    });

}