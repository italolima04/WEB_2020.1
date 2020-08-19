const DisciplinaModel = require("../models/DisciplinaModel");

let disciplinas = [];
let id = 0;

class DisciplinaService {
    //Criando uma disciplina a partir da instância de DisciplinaModel e preenchendo com os dados correspondentes ao exigido pelo construtor. Inserindo no array de disciplinas.
    static register(data) {
        let disciplina = new DisciplinaModel(
            id++,
            data.nome,
            data.curso,
            data.capacidade
        );
        disciplinas.push(disciplina);
        return disciplina;
    }

    //Listando as disciplinas existentes.
    static list() {
        return disciplinas;
    }

    //Recebe um ID e os dados para a disciplina correspondente, verifica se o id (único) exite no array de disciplinas, caso positivo atualiza os dados.
    static update(id, data) {
        for (let disciplina of disciplinas) {
            if (disciplina.id == id) {
                disciplina.nome = data.nome;
                disciplina.curso = data.curso;
                disciplina.capacidade = data.capacidade;
                return disciplina;
            }
        }
        return null;
    }

    static delete(id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i].id == id) {
                disciplinas.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i].id == id) {
                return disciplinas[i];
            }
        }
        return {};
    }
}

module.exports = DisciplinaService;