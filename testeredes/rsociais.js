function login(){
    var username = document.getElementById('username').value
    var password = document.getElementById('senha').value

    if(username === 'Alex' && password === '123'){
        alert('Login Bem-sucedido')
        alert(`Seja Bem-vindo ${username}`)
    }else{
        alert('Usuario ou Senha incorreto. Tente Novamente')
    }
}