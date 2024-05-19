


const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando" /> `
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji decepcionado" /> `
const atividades = []
const notas = []
const spanAprovado = `<span class=" resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class=" resultado reprovado">Reprovado</span>`
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = " "



form.addEventListener("submit",function(ev){
ev.preventDefault()
inserirLinhas()
atualizaTabela()
atualizaNotaFinal()

})




function inserirLinhas(){
    const inputNomeAtividade = document.getElementById("nome-atividade")
const inputNotaAtividade = document.getElementById("nota-atividade")

if(atividades.includes(inputNomeAtividade.value)){
alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
}else{

    atividades.push(inputNomeAtividade.value)
notas.push(parseFloat(inputNotaAtividade.value))


 let linha =  `<tr>
 <td>${inputNomeAtividade.value}</td>
<td>${inputNotaAtividade.value}</td>
<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado: imgReprovado}</td>
</tr>`

linhas += linha

}

inputNomeAtividade.value = ""
inputNotaAtividade.value = ""
}



function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}




function atualizaNotaFinal(){

    const mediaFinal = calcuarMediaFinal()
    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2)
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

   
}

function calcuarMediaFinal(){
    let somaDasNotas = 0

    for(let i = 0; i < notas.length;i++){
        somaDasNotas += notas[i]
    }
    return parseFloat( somaDasNotas / notas.length)
}

