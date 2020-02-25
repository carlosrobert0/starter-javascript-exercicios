<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Javascript</title>
  </head>
  <body>
    <script>
      function experiencia(anos){
        if(anos>=0 && anos<=1){
          console.log('iniciante')
        } else if (anos>=1 && anos<=3){
          console.log('intermediario')
        } else if (anos>=3 && anos<=6){
          console.log('avançado')
        } else if(anos>=7){
          console.log('Jedi Master')
        } else {
          console.log('o ano nao pode ser menor que 0')
        }
      }
      
      var anosEstudo = -2

      experiencia(anosEstudo)
    </script>
  </body>
</html>