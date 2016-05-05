const mongoose = require('mongoose');

const server = require('./src/server').server;
const mongoConfig = require('./src/server/config/mongo').mongoConfig;

mongoose.connect(mongoConfig.url, err => {
  if (err) throw err;
  return null;
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`listening on port ${port}`));
