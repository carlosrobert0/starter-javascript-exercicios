<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Javascript</title>
  </head>
  <body>
    <script>

      var skills = ['Javascript', 'ReactJS', 'React Native']

      function temHabilidade(skills) {
        var retorno = (skills.indexOf('Javascript') !== -1) ? true : false
        console.log(retorno)
      }

      temHabilidade(skills)
    </script>
  </body>
</html>