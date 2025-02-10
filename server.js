const express = require("express");
const app = express();
const cors = require("cors");
const { products, productDetail } = require("./utils/profuct");

app.use(cors());
app.get("/Products", (req, res) => {
  res.send(products);
});
app.get("/Products/:id", (req, res) => {
  const { id } = req.params;
  const filtered = productDetail.filter((product) => {
    return product.id == id;
  });
  res.send(filtered[0]);
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${8080}`);
});
