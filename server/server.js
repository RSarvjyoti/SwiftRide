const http = require("http");
const app = require("./app");
const dbConnection = require("./config/db");

const PORT = process.env.PORT || 9080

const server = http.createServer(app);

server.listen(PORT, () => {
    dbConnection(process.env.DB_URL);
    console.log(`Server is runing on http://localhost:${PORT} `)
})