const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const WebsiteConfig = require('./config.json');

var public = path.join(__dirname, 'public');
var update = path.join(__dirname, 'update');

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// AXIOS
const axios = require("axios");
// Variables
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// ROUTE
app.use('/', express.static(public));
app.use('/update', express.static(update));
app.get('/', function(req, res) {
    const configWebsite = require('./config.json');
    let options = {
        title: "Dashboard",
        websiteName: configWebsite.name,
        websiteDescription: configWebsite.description,
        websiteVersion: configWebsite.version,
        websiteBuild: configWebsite.build
    }
    res.render('main', options);
});

app.post('/api-clone', function(req, res) {
    const { CloneAPI } = require('./update');
    CloneAPI();
    setTimeout(function() {
        res.send('installed');
    })
});

// Start server WEB
server.listen(WebsiteConfig.port, () => {
    console.log('HTTP:' + WebsiteConfig.port);
});