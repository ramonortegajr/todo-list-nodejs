const express  = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: true }));  

app.get('/index', (req, res) => {
    res.render('index');
});

const routes = require('./routes/userRoutes');
app.use('/', routes);
const port = process.env.PORT || 5005;
app.listen(port, () => console.log (`Listening on ${port}`));
