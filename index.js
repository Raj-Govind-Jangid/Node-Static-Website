const express = require('express');
const app = express();

var homerouter = require('./router/homerouter')

const handlebars = require('express-handlebars');

app.set('view engine','hbs');
app.engine('hbs',handlebars({
    layoutsDir: (__dirname)+'/views/layouts',
    extname: 'hbs'
}));

app.use(express.static('public'));

app.use('/', homerouter);

app.listen(1200,()=>{
    console.log('Started');
})