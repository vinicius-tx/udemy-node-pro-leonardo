// axios serve para pegar json
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response =>{
    const data = response.data
    let pessoa = data
        .filter(pessoa=> pessoa.genero == 'F' && pessoa.pais == 'China')
            .sort((a, b) => {
                a.salario > b.salario
             })[0]
    
    console.log(pessoa)
})