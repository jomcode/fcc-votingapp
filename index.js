const server = require('./src/server').server;
const connectMongoose = require('./src/server').connectMongoose;

const port = process.env.PORT || 3000;

connectMongoose();

server.listen(port, () => console.log(`listening on port ${port}`));
