const app = require("./src/app");
const port = 8080;

app.listen(port, () => {
  console.log(`Ela faz o servidor dela: ${port}`);
});
