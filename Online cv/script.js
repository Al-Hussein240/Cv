document.addEventListener("DOMContentLoaded", () => {

    const elements =
        document.querySelectorAll(".reveal");


    /*
     * Détecte les sections lorsqu'elles
     * entrent dans l'écran.
     */

    const observer =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    elements.forEach((element) => {

        observer.observe(element);

    });

});