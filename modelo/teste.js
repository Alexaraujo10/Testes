function verificar(){
    let velocidade  = document.getElementById('txtv').value
    let res = document.getElementById('res')
    let speed  = Number(velocidade)


if(velocidade <= 0){
  res.innerHTML = 'Se ta parado irmão! se liga'

} else if (velocidade >= 1 && velocidade <= 29){
        res.innerHTML = 'Você esta aprendendo ou tem entre 60 a 80 anos'
    } 
    else if(velocidade >= 30 && velocidade <= 40){
       res.innerHTML = 'Dirija com segurança'
    } else if (velocidade >= 41 && velocidade <= 90){
        res.innerHTML = 'Vai com calma! a vida é  só  uma'
    } else if (velocidade >= 91 && velocidade <= 120){
        res.innerHTML = 'Ta sem freio ?'
    } else if (velocidade >= 121 && velocidade <= 300){
        res.innerHTML = 'Calma ayrton senna!'
    } else if(velocidade >= 301){
        res.innerHTML  = 'Ta num foguete ?, ou o freio quebrou e o acelerador travou ? '
    }
}   