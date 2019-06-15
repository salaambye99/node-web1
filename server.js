const express = require('express');

const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('toUpper', (text) => text.toUpperCase());

// console.log(__dirname);

// middleware:
app.use((req, res, use) => {
    console.log(`salam!: method: ${req.method} , url: ${req.url}`);
    use();
});

app.get('/', (req, res) => {

    res.render('home.hbs', {
        pageName: 'Home',
        welcomeMessage: 'Hi dear, welcome to my website.'
    });

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageName: 'About us'
    });
});


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});





