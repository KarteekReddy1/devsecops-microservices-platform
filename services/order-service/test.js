const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Order Service Running");
});

test("GET /", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Order Service Running");
});
