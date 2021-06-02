// Importing express module
const express = require('express');
const app = express();
  
// Getting Request
app.get('/', (req, res) => {
  
    // Sending the response
    res.send('Lakshmi says.. I love you all!')
     
    // Ending the response 
    res.end()
})
  
// Establishing the port 
const PORT = process.env.PORT ||5000;
  
// Executing the sever on given port number
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));
