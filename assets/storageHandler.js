(function() {
    var devtools = /./;
    devtools.toString = function() {
        console.log("¡Detente!");
        console.log("Esta función del navegador está pensada para desarrolladores.");
        console.log("Si alguien te indicó que copiaras y pegaras algo aquí para habilitar una función de Facebook o para 'hackear' la cuenta de alguien, se trata de un fraude.");
        console.log("Si lo haces, esta persona podrá acceder a tu cuenta.");
        console.log("Consulta https://www.facebook.com/selfxss para obtener más información.");
    };

    console.log(devtools);
})();