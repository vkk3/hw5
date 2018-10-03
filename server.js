'use strict';

const express = require('express');


const app = express();


app.get('/', (request, response) => {
    response.send('Hello MGT-656/660! Leaders for Business and Society');

});


app.get('/nickname', (request, response) => {
    response.send('thankful-lion');

});




app.listen(process.env.PORT || 4000);
