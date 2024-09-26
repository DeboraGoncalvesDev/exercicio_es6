
const alunos = [
    { nome: "Débora", nota: 8 },
    { nome: "Gian", nota: 10 },
    { nome: "Leandro", nota: 6 },
    { nome: "Lilian", nota: 5 },
    { nome: "Laura", nota: 4 }
];


function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}


const alunosAprovados = filtrarAlunosAprovados(alunos);


console.log(alunosAprovados);
