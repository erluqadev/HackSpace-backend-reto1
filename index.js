var express = require('express')
var app = express()
var faker = require('faker')
var lodash = require('lodash')
var uuid = require('uuid');

var generarPosts = function(){
  var randomId = uuid.v4();
  var randomName = faker.name.findName();
  var randomContenido = faker.lorem.sentence();
  var randomFecha = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
  	id : randomId,
    nombre: randomName,
    contenido: randomContenido,
    fecha : randomFecha,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/posts', function (req, res) {
  var cantidad = lodash.random(5,10)
  var posts = lodash.times(cantidad, generarPosts)
  res.json(posts);
})




app.listen(3000);