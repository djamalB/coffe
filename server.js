const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const menuRouter = require("./routes/menuRouter");

app.use("/menu", menuRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
