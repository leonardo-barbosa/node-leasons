// Learning NodeJS with Express Framework
const pagarme = require('pagarme')
var app = require('./config/server')

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.render('site/checkout');
});
app.get('/contato', function(req, res) {
    res.render('site/contato');
});
app.post('/capture', function(req, res) {
    var hash = req.body.card;


    pagarme.client.connect({ api_key: 'ak_test_PENAofVjdfF2ZPA5A5sXyfVtogaao8' })
        .then(client => client.transactions.create({
            amount: 100,
            payment_method: 'credit_card',
            card_hash: hash,
            postback_url: 'http://requestb.in/pkt7pgpk',
            customer: {
                name: 'Aardvark Silva',
                email: 'aardvark.silva@pagar.me',
                document_number: '18152564000105',
                address: {
                    street: 'Avenida Brigadeiro Faria Lima',
                    street_number: '1811',
                    neighborhood: 'Jardim Paulistano',
                    zipcode: '01451001'
                },
                phone: {
                    ddi: '55',
                    ddd: '11',
                    number: '99999999'
                }
            },
            metadata: {
                idProduto: '13933139'
            }
        }))
        .then(transaction => console.log(transaction))


});

app.listen(8090, function() {
    console.log('localhost:8090');
});