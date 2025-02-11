const express = require("express");
const app = express();
const cors = require("cors");
const { products, productDetail } = require("./utils/profuct");

const bodyParser = require("body-parser");
app.use(bodyParser());
app.use(cors());

app.get("/Products", (req, res) => {
  res.send(products);
});

let users = [];
const addUser = (userData) => {
  users.push(userData);
  console.log(users);
};

app.get("/Products/:id", (req, res) => {
  const { id } = req.params;
  const filtered = productDetail.filter((product) => product.id === id);
  if (filtered.length === 0) {
    return res.status(404).send({ message: "Product not found" });
  }
  res.send(filtered[0]);
});

app.post("/user", (req, res) => {
  console.log("body!", req.body.nums);
  addUser(req.body);
  res.send("user successfully added");
});

app.get("/user", (req, res) => {
  res.send(users);
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${8080}`);
});
