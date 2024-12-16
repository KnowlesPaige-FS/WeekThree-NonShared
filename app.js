require("dotenv").config(); 

const http = require("http");
const hostname = "localhost";
const port = 3001;

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);


const secretKey = process.env.MY_SECRET_KEY;
const databaseUrl = process.env.DATABASE_URL;

if (!secretKey || !databaseUrl) {
  console.error("Error: Missing environment variables. Please provide a .env file.");
  process.exit(1); 
}

console.log("Application running with environment: " + process.env.NODE_ENV);
console.log("The secret key is: " + secretKey);
console.log("Database URL: " + databaseUrl);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  let fileNamesList = "";
  filenames.forEach((file) => {
    fileNamesList += file + " \n";
  });

  res.end(fileNamesList);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
