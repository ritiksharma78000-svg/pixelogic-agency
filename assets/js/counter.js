/* ===========================
      ANIMATED COUNTER
=========================== */

const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".stats");

if (statsSection && counters.length > 0) {

    let started = false;

    function startCounters() {

        if (started) return;

        const sectionTop = statsSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            started = true;

            counters.forEach(counter => {

                const target = Number(counter.dataset.target);

                let count = 0;

                const increment = target / 100;

                function updateCounter() {

                    count += increment;

                    if (count < target) {

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                }

                updateCounter();

            });

        }

    }

    window.addEventListener("scroll", startCounters);

    startCounters();

}