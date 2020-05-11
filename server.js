const express = require("express");
const nunjucks = require("nunjucks");
const videos = require('./data/dataAulas')
const cursos = require('./data/dataCursos')

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

server.get("/", (req, res) => {
  return res.render("index");
});

server.get("/cursos", (req, res) => {
  return res.render("cursos", {itens:cursos});
});

server.get("/aulas", (req, res) => {
  return res.render("aulas",  {itens : videos} );
});

server.get("/video", (req, res) => {
  const id = req.query.id
  const video = videos.find(function (video){
      return video.id === id
  })

  if(!video){
    return res.send("Video not found!")
  }

  return res.render("video", {item:video})
});


server.use(function(req, res) {
  res.status(404).render("not-found");
})

server.listen(5000);
