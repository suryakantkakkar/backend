const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todo');

require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const port = 80; // Use any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/api/todos', todoRoutes);

