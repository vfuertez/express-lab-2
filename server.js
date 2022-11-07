const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello ${request.params.name}! It's so great to see you!`)
    console.log(request.params.name)
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})