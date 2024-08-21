function calcular() {
    let n1 = parseFloat(document.getElementById('nota1').value)
    let n2 = parseFloat(document.getElementById('nota2').value)
    let n3 = parseFloat(document.getElementById('nota3').value)
    let res = document.getElementById('res')

    let soma = n1 + n2 + n3
    let media = soma / 3

    if (media >= 5) {
        alert(`Sua media é ${media}`)
        alert('Aprovado Parabens')
    } else {
        alert(`Sua media é ${media}`)
        alert('Reprovado, Burro')
    }
    
}