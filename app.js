const express = require('express');
const app = express();


app.use(express.static('public'));


app.get('/home', function (req, res,next) {
    res.sendFile(__dirname+'/views/home.html');
    })
    
    app.get('/about', function (req, res,next) {
        res.sendFile(__dirname+'/views/about.html');
    })
    
    app.get('/works', function (req, res,next) {
        res.sendFile(__dirname+'/views/works.html');
    })
    
    app.get('/galery', function (req, res,next) {
        res.sendFile(__dirname+'/views/galery.html');
    })
    
    
    app.listen(3000, () => {
      console.log("Server listening on port 3000!");
    });


//     Una página de inicio , que da la bienvenida al visitante y enlaza con las demás páginas del sitio web.
// Una página Acerca de, que comparte información básica sobre la persona.
// Una página de Trabajos , donde muestra parte del trabajo de la persona que eligió.
// Bonificación: una página de galería de fotos , que muestra algunas imágenes de la persona/su trabajo.
