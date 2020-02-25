function checarIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject()
    }, 2000)
  })
}
  checarIdade(10)
    .then(function(){
      console.log('Maior que 18 anos')
    })
    .catch(function(){
      console.log('Menor que 18 anos')
    })