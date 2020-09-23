var mongoose = require("mongoose");

var DisciplinaSchema = mongoose.Schema({
    nome: { type: String, required: true, max: 120 },
    curso: { type: String, required: true, max: 80 },
    capacidade: { type: Number, required: true },
});

var DisciplinaModel = mongoose.model("disciplinas", DisciplinaSchema);

module.exports = DisciplinaModel;