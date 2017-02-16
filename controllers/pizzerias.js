
var mongoose = require('mongoose');
var Pizzeria  = mongoose.model('pizzeria');

//GET - obtengo todas las pizzerias
exports.findAllpizzerias = function(req, res) {
	Pizzeria.find(function(err, pizzerias) {
    if(err) res.send(500, err.message);

    console.log('GET /pizzerias')
		res.status(200).jsonp(pizzerias);
	});
};

//GET - ID
exports.findById = function(req, res) {
	Pizzeria.findById(req.params.id, function(err, pizzeria) {
    if(err) return res.send(500, err.message);

    console.log('GET /pizzeria/' + req.params.id);
		res.status(200).jsonp(pizzeria);
	});
};

//POST - Insert 
exports.addpizzeria = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var pizzeria = new Pizzeria({
	nombre : req.body.nombre,
    direccion : req.body.direccion,
    descripcion : req.body.descripcion,
    valorPlatoMax : req.body.valorPlatoMax,
    reputacion : req.body.reputacion,
    link : req.body.link,
    imagen : req.body.imagen,
	idpizzeria : req.body.idpizzeria,
	lat : req.body.lat,
	lng : req.body.lng
	});

	pizzeria.save(function(err, pizzeria) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(pizzeria);
	});
};

//PUT - Update
exports.updatepizzeria = function(req, res) {
		Pizzeria.findById(req.params.id, function(err, Pizzeria) {
		Pizzeria.nombre = req.body.nombre,
		Pizzeria.direccion = req.body.direccion,
		Pizzeria.descripcion = req.body.descripcion,
		Pizzeria.valorPlatoMax = req.body.valorPlatoMax,
		Pizzeria.reputacion = req.body.reputacion,
		Pizzeria.link = req.body.link,
		Pizzeria.imagen = req.body.imagen,
		Pizzeria.idpizzeria = req.body.idpizzeria,
		Pizzeria.lat = req.body.lat,
		Pizzeria.lng = req.body.lng

		Pizzeria.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(Pizzeria);
		});
	});
};

//DELETE
exports.deletepizzeria = function(req, res) {
	Pizzeria.findById(req.params.id, function(err, Pizzeria) {
		Pizzeria.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
