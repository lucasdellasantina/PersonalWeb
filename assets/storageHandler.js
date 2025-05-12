(function() {
    var devtools = /./;
    devtools.toString = function() {
        console.log('%c¡Detente!', 'font-size: 40px; color: red; font-weight: bold;');
        console.log('%cEsta función del navegador está pensada para desarrolladores.', 'font-size: 16px;');
        console.log('%cSi alguien te indicó que copiaras y pegaras algo aquí para habilitar alguna  función  es un fraude ', 'font-size: 14px;');
        console.log('%cSi lo haces, esta persona podrá acceder a tu cuenta.', 'font-size: 14px; font-weight: bold;');
        console.log('%c Puede tratarse de un Self XXS para obtener más información puedes buscarlo el google.', 'font-size: 14px; color: blue;');
    };

    console.log(devtools);
})();