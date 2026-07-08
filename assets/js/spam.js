/* ===========================
        SPAM PROTECTION
=========================== */

const spamForm = document.getElementById("contactForm");

if (spamForm) {

    // Form Load Time
    const formLoadedTime = Date.now();

    // Honeypot
    const honeypot = document.createElement("input");

    honeypot.type = "text";

    honeypot.name = "website";

    honeypot.style.display = "none";

    spamForm.appendChild(honeypot);

    spamForm.addEventListener("submit", function (e) {

        // Honeypot Check
        if (honeypot.value !== "") {

            e.preventDefault();

            console.warn("Spam Bot Detected");

            return;

        }

        // Fill Time Check
        const seconds = (Date.now() - formLoadedTime) / 1000;

        if (seconds < 5) {

            e.preventDefault();

            Swal.fire({

                icon: "warning",

                title: "Please wait...",

                text: "Please fill the form properly before submitting.",

                confirmButtonColor: "#2563EB"

            });

            return;

        }

        // Email Validation
        const email = spamForm.from_email.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            e.preventDefault();

            Swal.fire({

                icon: "error",

                title: "Invalid Email",

                text: "Please enter a valid email address."

            });

            return;

        }

        // Phone Validation
        const phone = spamForm.phone.value.trim();

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {

            e.preventDefault();

            Swal.fire({

                icon: "error",

                title: "Invalid Phone",

                text: "Enter a valid 10-digit Indian mobile number."

            });

            return;

        }

        // Message Validation
        const message = spamForm.message.value.trim();

        if (message.length < 15) {

            e.preventDefault();

            Swal.fire({

                icon: "warning",

                title: "Message Too Short",

                text: "Please describe your project in more detail."

            });

            return;

        }

    });

}