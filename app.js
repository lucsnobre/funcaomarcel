// Importação dos dados dos cursos e alunos
const cursosData = require('./cursos.js')
const alunosData = require('./alunos.js')

// Função que lista todos os cursos
const getCursos = function() {
    if (!cursosData || !cursosData.cursos) {
        return { quantidade: 0, cursos: [] } // Aparece vazio se n encontrar nenhum dado
    }

    let listaFormatada = []
    
    // Se tiver um curso ele printa
    cursosData.cursos.forEach((curso) => {
        listaFormatada.push({
            nome: curso.nome,
            sigla: curso.sigla,
            icone: curso.icone,
            carga: curso.carga
        })
    })

    // se a lista de cursos tiver vazia retorna 0
    if (listaFormatada.length === 0) {
        return { quantidade: 0, cursos: [] };
    }

    return {
        quantidade: listaFormatada.length,
        cursos: listaFormatada
    }
}


// lista todos os alunos
const getAlunos = function() {
    let listaFormatada = [];
    alunosData.alunos.forEach((aluno) => {
        let cursos = [];
        aluno.curso.forEach((c) => {
            cursos.push({
                nome: c.nome,
                sigla: c.sigla,
                conclusao: c.conclusao
            })
        })
        listaFormatada.push({
            nome: aluno.nome,
            matricula: aluno.matricula,
            status: aluno.status,
            cursos: cursos
        })
    })

    return {
        quantidade: listaFormatada.length,
        alunos: listaFormatada
    }
}

// fala as informações de um aluno por matrícula
const getAlunosPorMatricula = function(matricula) {
    let alunoEncontrado = null

    alunosData.alunos.forEach((aluno) => {
        if (aluno.matricula === matricula) {
            let cursos = []
            aluno.curso.forEach((c) => {
                cursos.push({
                    nome: c.nome,
                    sigla: c.sigla,
                    conclusao: c.conclusao
                })
            })
            alunoEncontrado = {
                nome: aluno.nome,
                matricula: aluno.matricula,
                status: aluno.status,
                cursos: cursos
            }
        }
    })

    return alunoEncontrado || false
}

// lista alunos por curso
const getAlunosPorCurso = function(siglaCurso) {
    let listaFiltrada = []
    alunosData.alunos.forEach((aluno) => {
        let alunoTemCurso = false

        aluno.curso.forEach((c) => {
            if (c.sigla.toUpperCase() === siglaCurso.toUpperCase()) {
                alunoTemCurso = true
            }
        })

        if (alunoTemCurso) {
            listaFiltrada.push({
                nome: aluno.nome,
                matricula: aluno.matricula,
                status: aluno.status,
                cursos: aluno.curso
            })
        }
    })

    return {
        quantidade: listaFiltrada.length,
        alunos: listaFiltrada
    }
}



const getAlunosPorStatusDisciplina = function(cursoMostrado, statusDaDisciplina) {

    let contador = 0 
    let procurarCurso = listaDeAlunos.alunos

    // Normalizando os parâmetros recebidos para maiúsculas
    let cursoMostrado2000 = cursoMostrado.toUpperCase()
    let statusDaDisciplina2000 = statusDaDisciplina.toUpperCase()
    
    let status = false 
    let salvarDado = []

    while (contador < cursoBusca.length) {
        if (cursoMostrado2000 === procurarCurso[contador].curso[0].sigla.toUpperCase()) {
            status = true
            let disciplinasFiltradas = []
            let contadorDeDisciplinas = 0

            while (contadorDeDisciplinas < procurarCurso[contador].curso[0].disciplinas.length) {
                let disciplina = procurarCurso[contador].curso[0].disciplinas[contadorDisciplinas]

                if (disciplina.status.toUpperCase() === statusDaDisciplina) {
                    disciplinasFiltradas.push(disciplina)
                }
                contadorDisciplinas++ 
            }
            if (disciplinasFiltradas.length > 0) {
                salvarDado.push({
                    nome: cursoBusca[contador].nome,
                    disciplinas: disciplinasFiltradas
                })
            }
        }
        contador++ 
    }

    if (status === true && salvarDado.length > 0) {
        return {
            curso: cursoFornecido,
            status: statusDaDisciplina2000, 
            alunos: guardarInformacoes
        }
    } else {
        return false
    }
}

const getAlunosPorStatus = function(statusAluno){
    let contador = 0 
    let statusDeBusca = listaDeAlunos.alunos
    let statusAluno2000 = statusAluno.toUpperCase()
    let status = false 
    let salvarDado = []

    while (contador < statusBusca.length){

        if (statusAluno2000.toUpperCase() == statusDeBusca[contador].status.toUpperCase()){
            status = true

            salvarDado.push({
                nome: statusDeBusca[contador].nome,
                matricula: statusDeBusca[contador].matricula,
                foto: statusDeBusca[contador].foto,
                nome: statusDeBusca[contador].nome,
                sexo: statusDeBusca[contador].sexo,
                curso: statusDeBusca[contador].curso
            })
        }


        contador ++
    }

    if (status == true){
        return salvarDado
    }else {
        return status
    }
}

const getAlunosPorCursoEStatus = function(cursoAluno, anoDeConclusao) {

    let contador = 0
    let procuraCurso = listaDeAlunos.alunos

    let cursoAluno = cursoAluno
    let anoConclusao = anoConclusao
    
    let status = false
    let salvarDado = []

    while (contador < procuraCurso.length) {

        if (cursoAluno2000.toUpperCase() == procuraCurso[contador].curso[0].sigla.toUpperCase() 
            && anoDeConclusao.toUpperCase() == procuraCurso[contador].curso[0].conclusao.toUpperCase()) {
            status = true

            guardarInformacoes.push({
                nome: procuraCurso[contador].nome,
                matricula: procuraCurso[contador].matricula,
                foto: procuraCurso[contador].foto,
                nome: procuraCurso[contador].nome,
                sexo: procuraCurso[contador].sexo,
                curso: procuraCurso[contador].curso
            })
        }

        contador++ 
    }

    if (status == true && salvarDado.length > 0) {
        return {
            curso: cursoAluno,
            anoConclusao: anoConclusao,
            alunos: salvarDado
        }
    } else {
        return false
    }
}


module.exports = {
    getCursos,
    getAlunos,
    getAlunosPorMatricula,
    getAlunosPorCurso,
    getAlunosPorStatus,
    getAlunosPorStatusDisciplina,
    getAlunosPorCursoEStatus
}