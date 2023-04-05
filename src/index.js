const express = require('express');

require('dotenv').config();

const setupAndStartServer = async () => {
   
    // Create express object
    const app = express();

    app.listen(process.env.PORT, () => {
        console.log(`Server started at ${process.env.PORT}`);
    });
}


setupAndStartServer();