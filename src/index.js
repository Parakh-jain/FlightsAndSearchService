const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
   
    // Create express object
    const app = express();

    // Middlewares setup
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}


setupAndStartServer();