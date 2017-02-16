exports = module.exports = function(app, mongoose) {

var pizzeriaSchema  = {
    "nombre" : String,
    "direccion" : String,
    "descripcion" : String,
    "valorPlatoMax" : String,
    "reputacion" : String,
    "link" : String,
    "imagen" : String,
	"idpizzeria" :String,
	"lat":String,
	"lng": String,
};

module.exports = mongoose.model('pizzeria',pizzeriaSchema);

};
