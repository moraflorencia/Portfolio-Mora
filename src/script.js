document.addEventListener('DOMContentLoaded', function() {
    // Configuración para el nombre
    new Typed('.typed-name', {
        strings: ["Florencia Mora"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        onComplete: function(self) {
            // Cuando el nombre termina de escribirse, inicializa el subtítulo
            new Typed('.typed-job', {
                strings: ["Desarrolladora Web", "Diseñadora UX/UI"],
                typeSpeed: 70,
                backSpeed: 40,
                backDelay: 1800,
                startDelay: 500,
                loop: true
            });
        }
    });
});