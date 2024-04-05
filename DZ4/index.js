const express = require("express");
const app = express();
const fs = require("fs");
const { register } = require("module");
const path = require("path");
const joi = require("joi");
const uniqid = require('uniqid')

const userShema = joi.object({
  firstName: joi.string().min(2).required(),
  secondName: joi.string().min(2).required(),
  age: joi.number().min(0).required(),
  city: joi.string().min(2),
});


const userDbpath = path.join(__dirname, "./users.json");

app.use(express.json());

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbpath));
  res.send({ users });
});

app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbpath));
  const findUser = users.find((user) => {
    return user.id === req.params.id;
  });
  res.send({ user: findUser });
});

app.post("/users", (req, res) => {
  const result = userShema.validate(req.body);

  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }
  uniqueId = uniqid();
  const users = JSON.parse(fs.readFileSync(userDbpath));
  users.push({ id: uniqueId, ...req.body });
  fs.writeFileSync(userDbpath, JSON.stringify(users));
  res.send({ id: uniqueId });
});

app.put("/users/:id", (req, res) => {
  const result = userShema.validate(req.body);

  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }
  const users = JSON.parse(fs.readFileSync(userDbpath));
  const findUser = users.find((user) => {
    return user.id === req.params.id;
  });
  if (findUser) {
    findUser.firstName = req.body.firstName;
    findUser.secondName = req.body.secondName;
    findUser.age = req.body.age;
    findUser.city = req.body.city;
    fs.writeFileSync(userDbpath, JSON.stringify(users));
    res.send({ user: findUser });
  } else {
    res.send({ users: null });
  }
});

app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbpath));
  const findUser = users.findIndex((user) => {
    return user.id === req.params.id;
  });
  users.splice(findUser, 1);
  fs.writeFileSync(userDbpath, JSON.stringify(users));
  res.send({ id: req.params.id });
});

app.listen(3000);
