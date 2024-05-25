function verificar(){
    let pergunta = document.getElementById('perg').value
    let check  = document.getElementById('check')
    let res = document.getElementById('res')

    
    if (pergunta === 'O ney ama a camila ?') {
        res.innerHTML = 'Sim, o Ney ama a Camila!';
    } else {
        res.innerHTML = 'Não, essa não é a pergunta certa.';
    }
}



