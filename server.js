'use strict';

const express = require('express');
const path = require('path');

// Routes gathered from @app/routes
const websiteRoutes = require("./app/routes/Website.routes");
const apiRoutes = require("./app/routes/Api.routes.js");

// Setup express & port
const app = express();
const port = 3000;


// Setting view engine
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

// Applying the routes collected from @app/routes
app.use("/", websiteRoutes);
app.use("/apiRoutes", apiRoutes);

// Applying stylesheet
app.use(express.static(__dirname + '/src'));

// Booting up the server
app.listen(port, function () {
    console.log(`Listening to port: ${port}`);
})
