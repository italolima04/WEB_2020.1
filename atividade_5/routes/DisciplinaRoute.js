var express = require("express");
var router = express.Router();
var disciplinaService = require("../services/DisciplinaService");

router.post("/register", (request, response, next) => {
    const disciplina = disciplinaService.register(request.body);
    return response.json(disciplina);
});
router.get("/list", (request, response, next) => {
    return response.json(disciplinaService.list());
});
router.put("/update/:id", (request, response, next) => {
    const disciplina = disciplinaService.update(request.params.id, request.body);
    return response.json(disciplina);
});
router.delete("delete/:id", (request, response, next) => {
    const disciplina = disciplinaService.delete(request.params.id);
    if (disciplina) return response.json({ sucess: true });
    else return response.json({ sucess: false });
});
router.get("/retrieve/:id", (request, response, next) => {
    const disciplina = disciplinaService.retrieve(request.params.id);
    return response.json(disciplina);
});

module.exports = router;