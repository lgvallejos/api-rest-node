var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose'),
	cors = require('cors'),
	corsOptions = {
		origin: '*'
	};



// Conexion
var uri='mongodb://userpizza:pizza123@ds153719.mlab.com:53719/heroku_4kpkd8j2';
mongoose.connect(uri,{authMechanism: 'ScramSHA1'});
var conn = mongoose.connection

conn.on('error', console.error.bind(console, 'connection error:'));


// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors(corsOptions));

// importacion de modelos y controladores
var models     = require('./models/pizza')(app, mongoose);
var PizzeriasCtrl = require('./controllers/pizzerias');

// ruta de ejemplo
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// rutas del API 
var pizzerias = express.Router();

pizzerias.route('/pizzerias')
  .get(PizzeriasCtrl.findAllpizzerias)
  .post(PizzeriasCtrl.addpizzeria);

pizzerias.route('/pizzerias/:id')
  .get(PizzeriasCtrl.findById)
  .put(PizzeriasCtrl.updatepizzeria)
  .delete(PizzeriasCtrl.deletepizzeria);

app.use('/api', pizzerias);



// inicio del servidor
app.listen(process.env.PORT || 3000, function() {
	var port = process.env.PORT;
  console.log("Node server running on port ", port);
});
