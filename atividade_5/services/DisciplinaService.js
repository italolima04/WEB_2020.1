const DisciplinaModel = require("../models/DisciplinaModel");

let disciplinas = [{
        _id: 0,
        nome: "Aprendizado de Máquina",
        curso: "Ciência da Computação",
        capacidade: 40,
    },
    {
        _id: 1,
        nome: "Probabilidade e Estatística",
        curso: "Ciência da Computação",
        capacidade: 45,
    },
    {
        _id: 2,
        nome: "Desenvolvimento de Software para Web",
        curso: "Ciência da Computação",
        capacidade: 35,
    },
];
let _id = 3;

class DisciplinaService {
    //Criando uma disciplina a partir da instância de DisciplinaModel e preenchendo com os dados correspondentes ao exigido pelo construtor. Inserindo no array de disciplinas.
    static register(data) {
        let disciplina = new DisciplinaModel(
            _id++,
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

    //Recebe um ID e os dados para a disciplina correspondente, verifica se o _id (único) exite no array de disciplinas, caso positivo atualiza os dados.
    static update(id, data) {
        for (let disciplina of disciplinas) {
            if (disciplina._id == id) {
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
            if (disciplinas[i]._id == id) {
                disciplinas.splice(i, 1);
                _id--;
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i]._id == id) {
                return disciplinas[i];
            }
        }
        return {};
    }
}

module.exports = DisciplinaService;