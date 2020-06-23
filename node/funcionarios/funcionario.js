// axios serve para pegar json
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response =>{
    const data = response.data
    let pessoa = data
        .filter(pessoa=> pessoa.genero == 'F' && pessoa.pais == 'China')
            .reduce((funcionario, funcionarioAtual) => 
                funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
            )

    
    
    console.log(pessoa)
})