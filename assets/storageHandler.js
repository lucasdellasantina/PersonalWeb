(function() {
    var isConsoleOpen = false;

    // Función para detectar la apertura de la consola
    var detectConsole = function() {
        var devtools = /./;
        devtools.toString = function() {
            isConsoleOpen = true;
            console.clear();  // Limpiar la consola para evitar cualquier acumulación
            console.log("¡Detente!");
            console.log("Esta función del navegador está pensada para desarrolladores.");
            console.log("Si alguien te indicó que copiaras y pegaras algo aquí para habilitar una función de Facebook o para \"hackear\" la cuenta de alguien, se trata de un fraude.");
            console.log("Si lo haces, esta persona podrá acceder a tu cuenta.");
            console.log("Consulta https://www.facebook.com/selfxss para obtener más información.");
        };

        // Probar el método para detectar si la consola está abierta
        console.log(devtools);
    };

    // Revisa cada segundo si la consola está abierta
    setInterval(function() {
        if (isConsoleOpen) {
            return;
        }
        detectConsole();
    }, 1000);
})();
