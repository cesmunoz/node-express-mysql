var app = require('./app');
var port = app.get('port');

app.use(function(err, req, res, next){
    if(err) {
        res.status(500).send('Oops! Ha ocurrido un error. Reintente más tarde.')
    }    
});

app.listen(port, function(){
    console.log('Running app on port ' + port);
});
