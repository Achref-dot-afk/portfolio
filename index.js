const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
 app.use(express.static('src'))
//get method to send src 
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'));
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});