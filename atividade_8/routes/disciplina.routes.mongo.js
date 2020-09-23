var express = require("express");
var router = express.Router();
var disciplinaService = require("../services/disciplina.service.mongo");

router.get("/list", (request, response) => {
    disciplinaService.list(request, response);
});

router.post("/register", (request, response) => {
    disciplinaService.register(request, response);
});

router.put("/update/:id", (request, response) => {
    disciplinaService.update(request, response);
});

router.delete("/delete/:id", (request, response) => {
    disciplinaService.delete(request, response);
});

router.get("/retrieve/:id", (request, response) => {
    disciplinaService.retrieve(request, response);
});

router.get("/retrieve/nome/:nome", (request, response) => {
    disciplinaService.retrieveByNome(request, response);
});

module.exports = router;