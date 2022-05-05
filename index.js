const express = require('express');
morgan = require('morgan');
const app = express();

let topMovies = [
  {
    title: 'Star Wars V The Empire Strikes Back',
    year: '1980'
  },
  {
    title: 'Top Gun',
    year: '1986'
  },
  {
    title: 'The Shawshank Redemption',
    year: '1994'
  },
  {
    title: 'The Usual Suspects',
    year: '1995'
  },
  {
    title: 'The Game',
    year: '1997'
  },{
    title: 'Shutter Island',
    year: '2010'
  },
  {
    title: 'Green Mile',
    year: '1999'
  },
  {
    title: 'The Departed',
    year: '2006'
  },
  {
    title: 'Batman',
    year: '1989'
  },
  {
    title: 'Iron Man 3',
    year: '2013'
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to my topMovies')
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(express.static('public'));

app.use(morgan('common'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
});
