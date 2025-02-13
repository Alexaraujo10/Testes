function calcular(){
   //Converte os valores dos inputs para numeros
    let nota1 = parseFloat(document.getElementById('txtn1').value)
    let nota2 = parseFloat(document.getElementById('txtn2').value)
    let nota3 = parseFloat(document.getElementById('txtn3').value)
    let res = document.getElementById('res')
       
    //calcula as notas
    let total = nota1 +  nota2 + nota3

    //verifica o total e exibe o resultado
    if(total >= 5){
        res.innerHTML = 'Aprovado'
    } else{
        res.innerHTML = 'Reprovado  Media mininima para passar é 5'
    }

}