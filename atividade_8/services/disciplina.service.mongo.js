const DisciplinaModel = require("../models/disciplina.model");

class DisciplinaService {
    static register(request, response) {
        DisciplinaModel.create(request.body)
            .then((disciplina) => {
                response.status(201).json(disciplina);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static list(request, response) {
        DisciplinaModel.find()
            .then((disciplinas) => {
                response.status(201).json(disciplinas);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static update(request, response) {
        DisciplinaModel.findByIdAndUpdate(request.params.id, request.body, {
                "new": true,
            })
            .then((disciplina) => {
                response.status(201).json(disciplina);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static delete(request, response) {
        DisciplinaModel.findByIdAndRemove(request.params.id)
            .then((disciplina) => {
                response.status(201).json(disciplina);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static retrieve(request, response) {
        DisciplinaModel.findById(request.params.id).then((disciplina) => {
            response.status(201).json(disciplina);
        });
    }

    static retrieveByNome(request, response) {
        DisciplinaModel.find({ "nome": request.params.nome }).then((disciplina) => {
            response.status(201).json(disciplina);
        });
    }
}

module.exports = DisciplinaService;