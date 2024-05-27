function verificar(){
    let velocidade  = document.getElementById('txtv').value
    let res = document.getElementById('res')
    let speed  = Number(velocidade)
    let img = document.createElement('img')
   let  audio =  document.createElement('audio')
    
res.innerHTML = ''

if(velocidade <= 0){
  res.innerHTML = 'Se ta parado irmão! se liga'
  img.setAttribute('src','ta parado.jpg')
  img.setAttribute('id', 'foto')
  audio.setAttribute('id','audio')
} else if (velocidade >= 1 && velocidade <= 29){
        res.innerHTML = 'Você esta aprendendo ou tem entre 60 a 80 anos'
        img.setAttribute('src','solta a embreagem.jpg')
    } 
    else if(velocidade >= 30 && velocidade <= 40){
       res.innerHTML = 'Dirija com segurança'
    } else if (velocidade >= 41 && velocidade <= 90){
        res.innerHTML = 'Vai com calma! a vida é  só  uma'

        img.setAttribute('src','foto-vai com calma.jpg')

    } else if (velocidade >= 91 && velocidade <= 120){
        res.innerHTML = 'Ta sem freio ?'
        img.setAttribute('src','ta sem freio.jpg')

    } else if (velocidade >= 121 && velocidade <= 300){
        res.innerHTML = 'Tutututu du Max Verstappen'
        img.setAttribute('src','tutututu du max verstappen.jpg') 
        audio.setAttribute('src', 'tu-tu-tu-du-max-verstappen.mp3') 

    } else if(velocidade >= 301  && velocidade <= 998){
        res.innerHTML  = 'Eu sou a Velocidade'
        img.setAttribute('src','mcqueen.jpg')
        audio.setAttribute('src', 'eu sou a velo.mp3')

    } else if(velocidade <= 999){
        res.innerHTML  = 'Ta em um uno pae ?'
        img.setAttribute('src', 'uno.jpg')
        audio.setAttribute('src', 'que foguete.mp3')
    }
    res.appendChild(img)
    audio.setAttribute('autoplay','true')
    res.appendChild(audio)
    
}   