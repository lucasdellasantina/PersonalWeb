(function() {
    const detectConsoleOpen = () => {
        const start = new Date();
        debugger;  // Usa el debugger para intentar detectar si la consola está abierta
        const end = new Date();
        
        if (end - start > 100) {  // Si el tiempo entre estas dos líneas es mayor a un valor específico, es probable que la consola esté abierta
            console.clear();  // Limpiar la consola para que no se acumule
            console.log("¡Detente!");
            console.log("Esta función del navegador está pensada para desarrolladores.");
            console.log("Si alguien te indicó que copiaras y pegaras algo aquí para habilitar una función de Facebook o para \"hackear\" la cuenta de alguien, se trata de un fraude.");
            console.log("Si lo haces, esta persona podrá acceder a tu cuenta.");
            console.log("Consulta https://www.facebook.com/selfxss para obtener más información.");
        }
    };

    // Llama a la función para detectar la consola abierta
    setInterval(detectConsoleOpen, 1000);  // Revisa cada segundo
})();
