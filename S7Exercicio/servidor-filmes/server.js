const app = require("./src/app");
const port = 3000;

app.listen(port, () => {
  console.log(`Ela faz o servidor dela: porta ${port}`);
});
