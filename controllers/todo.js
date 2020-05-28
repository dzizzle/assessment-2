const express = require("express");
const todo = express.Router();
const todos = require("../models/todos.js");


// INDEX //
todo.get("/", (req, res) => {
  res.render("Index", {
    todos,
  });
});

// CREATE //
todo.post("/new", (req, res) => {
    const { todo } = req.body;
    const done = false;
    todos.push({ todo, done });
    res.redirect("/todos");
  });
  
  // DELETE // 
  todo.delete("/:index", (req, res) => {
    const { index } = req.params;
    todos.splice(index, 1);
    res.redirect("/todos");
  });
  
  module.exports = todo;