

var calcular = document.getElementById('calcular')
var res = document.getElementById('res')

calcular.addEventListener('click', function(){
//digite a nota
    var nota  = parseFloat(document.getElementById('nota').value)
//se a nota for acima  de 5
    if(nota >= 5){
        res.innerHTML = 'Você tem uma boa nota'
    } 
    //se a nota for abaixo de 4
    else{
        res.innerHTML = 'Você consegue Notas melhores'
    }
    
    
    
})
    


























/*
//executa o laço enquanto for menor que 6
var  c=1
do{

    console.log(`Valor de C é ${c}`)

    c++
}while(c <= 10)

// caso passe de 6 apresenta as mensagens abaixo
if (c === 7){
    console.log('Você atingiu o limite')
   
}else{
 console.log('Você passou do limite')
}  
    */


/*
for(c = 1; c <=6; c++){
    console.log(c)
    if(c >= 6){
    console.log('Você atingiu o limite')
    }
 }
*/