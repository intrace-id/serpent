const http = require('http');
const app = require('../app');
const port = process.env.PORT || 3000;

const srv = http.createServer(app);

console.log('PORT', process.env.PORT)
srv.listen(port, () => console.log('Listen on port: ', port));