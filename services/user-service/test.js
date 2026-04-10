const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("User Service Running");
});

test("GET / should return message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("User Service Running");
});
