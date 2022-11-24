const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json()); // Middleware
app.use(routes);

const port = 3000;

app.listen(3000, () => console.log(`🚀 Server is Running at http://localhost:${port}`));
