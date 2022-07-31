const http = require('http');

const server = http.createServer(()=>{
    console.log("istek gitti");
});

const port=3000;
server.listen(port,()=>{
    console.log(`sunucu port ${port}de başladı`);
})