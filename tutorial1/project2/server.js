import express from 'express'

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Handle POST request for temp conversion
app.post('/convert', (req, res) => {
    setTimeout(() => {
      const fahrenheit = parseFloat(req.body.fahrenheit);
      const celsius = (fahrenheit - 32) * (5 / 9);
  
      res.send(`
        <p>
          ${fahrenheit} degrees Farenheit is equal to ${celsius.toFixed(3)} degrees Celsius
        </p>
      `);
    }, 2000);
  });
  


//Start the server
app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});



