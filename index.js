const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const WebsiteConfig = require('./config.json');

var public = path.join(__dirname, 'public');

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
app.get('/', function(req, res) {
    res.render('main', { title: "dashboard" });
});

// Start server WEB
server.listen(WebsiteConfig.port, () => {
    console.log('HTTP:' + WebsiteConfig.port);
});