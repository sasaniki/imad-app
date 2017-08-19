var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={  
  'article-one':{
        title:'article-one',
        heading:'articleone',
        date:'sep 5,2017',
        content:` <h2>Personal</h2>
        <p>
             This is some personal information   about me.
        </p>
        <h2>Professional</h2>
        <p>
             This is a list of my work experiences:
        </p>
        <ol>
         <li> Company A: Worked as some very seriously</li>
         <li> Company B: Worked without seriousness </li>
        </ol>`
},
'article-two':{
        title:'article-two',
        heading:'articletwo',
        date:'sep 5,2017',
        content:` <h2>Personal</h2>
        <p>
             This is some personal information   about me.
        </p>
        <h2>Professional</h2>
        <p>
             This is a list of my work experiences:
        </p>
        <ol>
         <li> Company A: Worked as some very seriously</li>
         <li> Company B: Worked without seriousness </li>
        </ol>`
},
'article-three':{
        title:'article-three',
        heading:'articlethree',
        date:'sep 5,2017',
        content:` <h2>Personal</h2>
        <p>
             This is some personal information   about me.
        </p>
        <h2>Professional</h2>
        <p>
             This is a list of my work experiences:
        </p>
        <ol>
         <li> Company A: Worked as some very seriously</li>
         <li> Company B: Worked without seriousness </li>
        </ol>`
}
};

function createtem(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=`<html>
    <head>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <h1>
            ${heading}
        </h1>
        ${content}
        </div>
    </body>
</html>
`;
return htmltemplate;
}

app.get('/ui/articleone', function (req, res) {
    //var articlename=req.params.articlename;
    //res.send(createtem(articles[articlename]));
    res.send(createtem(articles[article-one]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/articletwo', function (req, res) {
    res.send('SERVED SOON');
});

app.get('/ui/articlethree', function (req, res) {
    res.send('SERVED SOON');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
