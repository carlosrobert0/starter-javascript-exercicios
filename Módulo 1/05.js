<html>
  <head>
    <meta charset="utf-8">
    <title>Curso Javascript</title>
  </head>
  <body>
    <script>
      var usuarios = [
        {
          nome: 'Diego',
          habilidades: ['Javascript', 'ReactJS', 'Redux']
        },
        {
          nome: 'Gabriel',
          habilidades: ['Vues', 'Ruby on Rails', 'Elixir']
        }
      ];

      function usuarioHabilidades(usuarios){
        for(usuario of usuarios) {
          console.log('O '+usuario.nome+' possui as habilidades: '+usuario.habilidades.join(', '))
        }
      }
      
      usuarioHabilidades(usuarios)
    </script>
  </body>
</html>