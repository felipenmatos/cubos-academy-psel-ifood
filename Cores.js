function solucao(cor1, cor2) {
    const corPrimaria = {
    azul: 'azul',
    vermelho: 'vermelho',
    amarelo: 'amarelo'
    }
    if (cor1 === corPrimaria.azul && cor2 === corPrimaria.azul) {
    console.log('azul')
    } else if (cor1 === corPrimaria.azul && cor2 === corPrimaria.vermelho) {
    console.log('roxo')
    } else if (cor1 === corPrimaria.azul && cor2 === corPrimaria.amarelo) {
    console.log('verde')
    } else if (cor1 === corPrimaria.vermelho && cor2 === corPrimaria.vermelho) {
    console.log('vermelho')
    } else if (cor1 === corPrimaria.vermelho && cor2 === corPrimaria.azul) {
    console.log('roxo')
    } else if (cor1 === corPrimaria.vermelho && cor2 === corPrimaria.amarelo) {
    console.log('laranja')
    } else if (cor1 === corPrimaria.amarelo && cor2 === corPrimaria.amarelo) {
    console.log('amarelo')
    } else if (cor1 === corPrimaria.amarelo && cor2 === corPrimaria.azul) {
    console.log('verde')
    } else if (cor1 === corPrimaria.amarelo && cor2 === corPrimaria.vermelho) {
    console.log('laranja')
    }
}