const mongoose = require('mongoose');

const server = require('./src/server').server;
const mongoConfig = require('./src/config/mongo').mongoConfig;

mongoose.connect(mongoConfig.url, err => {
  if (err) return console.error(`${err.name}: ${err.message}`);
  return null;
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`listening on port ${port}`));
