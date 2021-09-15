const express = require('express')
const server = express()




const path = require('path')

const publicPath = path.resolve(__dirname, 'public');
server.use(express.static(publicPath));


server.get('/', function(req, res){
    res.sendFile(__dirname +'/public/index.html');
});

server.get('/SaludyBelleza',function(req, res){
    res.sendFile(__dirname + '/public/ProdSaluBelle.html')
});

server.get('/Electronica', function(req, res){
    res.sendFile(__dirname+ '/public/ProdElectronico.html')
});

server.get('/Gamer', function(req, res){
    res.sendFile(__dirname+ '/public/ProdGamer.html')
});

server.get('/Hogar', function(req, res){
    res.sendFile(__dirname+ '/public/ProdHogar.html')
});

server.get('/Lamparas', function(req, res){
    res.sendFile(__dirname+ '/public/ProdLamparas.html')
});

server.get('/Varios', function(req, res){
    res.sendFile(__dirname+ '/public/ProdVarios.html')
});

server.get('/Contactos', function(req, res){
    res.sendFile(__dirname+ '/public/contactos.html')
});

server.listen(8081, ()=>{
    console.log("Servidor ejecutandose en el puerto 8081");
});