const mongoose = require("mongoose");
const express = require("express");
const Student = require("./model");
require("dotenv/config");

const app = express();
const port = 2000;

app.use(express.json());

app.put("/store", async (request, response) => {
  const reqBody = request.body;
  const newStudent = new Student(reqBody);
  const findUser = await Student.findOne({ fullname: reqBody.fullname });
  if (findUser) {
    return response.status(400).send("User already exists");
  } else {
    await newStudent.save();
    return response.status(200).send(newStudent);
  }
  // response.send("Server is working perfect")
});

mongoose.connect(process.env.mongoDB);
app.listen(port, () => {
  console.log("Serving is running on port " + port);
});
//With this we have created an Endpoint and connected it to our Database
