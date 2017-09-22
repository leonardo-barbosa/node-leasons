// Learning NodeJS with Express Framework

var app = require('./config/server')

app.get('/',function(req, res){
	res.render('site/home');
});
app.get('/contato',function(req, res){
	res.render('site/contato');
});


app.listen(8080, function(){
	console.log('localhost:8080');	
});
