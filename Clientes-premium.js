function solucao(precos) {
      
    let soma = 0
    for (const preco of precos) {
      soma += preco
    }
    let parametro = 200
    if (soma > 1000) {
      for (const preco of precos) {
        if (preco > parametro) {
          console.log('PREMIUM')
          break
        } else if (preco <= parametro) {
          console.log('VIP')
          break
        }
      }
    } else {
      console.log('NORMAL')
}
}
