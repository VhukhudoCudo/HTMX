import express from 'express'

const  app = express();

 //set static folder
app.use(express.static('public'));

 //Parse URL-encoded bodies(as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

 //Parse JSON bodies(as sent by API clients)
app.use(express.json());

let counter = 0;
//Handle Get request for polling example
app.get('/poll', (req, res) => {
counter++;

const data = { value: counter};

res.json(data);
});

let currentTemparature = 20;

//Handle Get request for weather
app.get('/get-temparature', (req, res) => {
    currentTemparature += Math.random() * 2 - 1;//Random temp change
    res.send(currentTemparature.toFixed(1) + '°C');
});

//Start the server
app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});




