var express = require('express'); //MVC framework
	/*
		M = Model - a JavaScript variable or Object
		V = View - HTML code
		C = Routes - defining routes
	*/

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public')); //middleware

/* http://localhost:3000 */
app.get('/', function(req, res) {
	//res.sendFile(__dirname+ '/view/home.ejs');
	res.render('home', {headline: 'I Love my City'});
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('Server running at http://localhost:'+port);
});
