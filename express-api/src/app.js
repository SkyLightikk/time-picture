// Require packages and set the port
// Export the router
const routes = require("./routes");
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const port = 80;


// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
// Используем cors для локальной работы
app.use(cors());

// маршруты в файле routes.js
routes(app);


app.listen(port, () => console.log(
    `Example app listening on port ${port}!`));