const PORT = require("./config");
const express = require("express");
const cors = require("cors");
const app = express();

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];
app.use(express.static("build"));
app.use(cors());
app.get("/api/notes", (request, response) => {
  response.json(notes);
});
console.log(PORT.PORT);
app.listen(PORT.PORT);
