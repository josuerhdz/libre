const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');

app.set('view engine', 'ejs'); // Configurar EJS como motor de plantillas
app.use(express.static('public')); // Carpeta para archivos estáticos (CSS, imágenes, etc.)

app.get('/', (req, res) => {
  res.render('index'); // Renderizar la vista 'index.ejs' en la carpeta 'views'
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
