(function() {
    var devtools = /./;
    devtools.toString = function() {
        console.log('%c¡Detente!', 'font-size: 40px; color: red; font-weight: bold;');
        console.log('%cEsta función del navegador está pensada para desarrolladores.  /n Si alguien te indicó que copiaras y pegaras algo aquí  es un fraude. Si lo haces, esta persona podrá acceder a tu cuenta. ', 'font-size: 20px; font-weight: bold;' );
        console.log('%c Puede tratarse de un Self XXS',  'font-size: 18px;color: red;font-weight: bold;');
    };
    console.log(devtools);
})();