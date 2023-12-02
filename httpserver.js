const http = require("http");

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200; //ok
  res.setHeader("Content-type", "text/html");
  res.end(
    "<h1> This is our http video </h1> <p> Hey this course is usefull! </p>  "
  );
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port} `);
});
