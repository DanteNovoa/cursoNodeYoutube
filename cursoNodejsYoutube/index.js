const http =require('http');//este modulo te permite crear servidores

const colors =require('colors');

const handleServer = function(req, res){

    res.writeHead( 200, {'Content-type': 'text/html'}); //aqui mandamos la peticion de head que queremos tenga nuestro res y su status 200
    res.write('<h1>Hola Mundo desde nodejs</h1>');
    res.end(); //aqui cerramnos la respuesta para que pueda seguir escfribiendo nuevas peticiones

} 

const server = http.createServer(handleServer);
server.listen(3000 , function(){
    console.log('Server on port 3000'.green);
});
/*http.createServer(handleServer).listen(3000);*/

/*http.createServer(function(req, res){

    res.writeHead( 200, {'Content-type': 'text/html'}); //aqui mandamos la peticion de head que queremos tenga nuestro res y su status 200
    res.write('<h1>Hola Mundo desde nodejs</h1>');
    res.end(); //aqui cerramnos la respuesta para que pueda seguir escfribiendo nuevas peticiones

}).listen(3000);//esta funcion esta creando el servidor y manejando las reswpuesta*/