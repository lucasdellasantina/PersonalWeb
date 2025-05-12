// Detectar si el usuario intenta abrir la consola (algunas técnicas que pueden ayudar)
(function() {
    const blocked = ['console', 'debugger'];
    const test = () => {
        const result = blocked.some(keyword => typeof window[keyword] !== 'undefined');
        if (result) {
            alert("¡No ejecutes código en la consola! Esto podría poner en riesgo tu seguridad.");
        }
    };

    window.addEventListener('keydown', test);
    window.addEventListener('mousedown', test);
})();