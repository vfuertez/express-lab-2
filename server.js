// const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3003;

app.get('/tip/:total/:tipPercentage', (request, response) => {
    console.log(request.params)
    const moneyTotal = parseInt(request.params.total)
    const moneyTipPercentage = parseInt(request.params.tipPercentage)
    console.log(moneyTotal)
    response.send(`${(moneyTipPercentage / 100) * moneyTotal}`)
  //(error) express deprecated res.send(status): (error)
  //fix -> Do not pass numeric arguments to res.send 
});

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello ${request.params.name}! It's so great to see you!`);
   // console.log(request.params.name);
});



app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});