<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Javascript</title>
  </head>
  <body>
    <script>
      var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "Sao Paulo",
        uf: "SP"
      }
      
      function exibeEndereco(endereco) {
        console.log('O usuario mora em '+endereco.cidade+' / '
        +endereco.uf+', no bairro '+endereco.bairro+', na rua "'
        +endereco.rua+'" com nº '+endereco.numero)
      }  

      exibeEndereco(endereco)
    </script>
  </body>
</html>
