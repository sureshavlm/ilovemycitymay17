var express = require('express'); //MVC framework
	/*
		M = Model - a JavaScript variable or Object
		V = View - HTML code
		C = Routes - defining routes
	*/

var routes = require('./routes/route');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public')); //middleware

/* http://localhost:3000 */
app.get('/', routes.home);

/** http://localhost:8080/paris **/
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('Server running at http://localhost:'+port);
});
