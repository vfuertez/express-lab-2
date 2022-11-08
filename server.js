// const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3003;


app.get('/magic/:question', (request, response) => {
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    let answer = arr[Math.floor(Math.random()*arr.length)]
    //console.group(answer)
    response.send(answer)
});

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