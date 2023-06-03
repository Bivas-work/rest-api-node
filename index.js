const express = require("express");
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const noteRoutes = require('./note_routes');

const app = express();
const PORT = process.env.PORT||3000;

module.exports = function(app, db) {  noteRoutes(app, db);  // Other route groups could go here, in the future
};


let dataStore = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  //Use the express.json() middleware to parse JSON requests:
  app.use(express.json());

  app.get('/api/users',(req,res) => {
    res.json(dataStore);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  app.post('/api/users',(req,res) => {
    console.log(req.body)
    dataStore.push({id: dataStore.length +1,name: req.body.name});
    res.status(201).json(dataStore);
  })

