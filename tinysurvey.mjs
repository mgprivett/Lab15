import express from 'express';

const app = express();

app.get('/index.html', (request, response) => {
  response.send('Hello from Cloud Application Development');
})

app.get('/extra.html', (request, response) => {
    response.send('Hello from Extra');
  })
  
app.get('/csc227.html', (request, response) => {
    response.send('Hello from CSC 227')
  })
app.listen(3000, () => {
  console.log("Express Server Running");
})
