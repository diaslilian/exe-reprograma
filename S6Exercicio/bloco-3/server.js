const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);

  // enviar resposta
  res.write("<h1>Hello World!</h1>");
});

server.listen(3000, "localhost", () => {
  console.log("servidor rodando na porta 3000");
});
