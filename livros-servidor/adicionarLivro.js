const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/livraria', { useNewUrlParser: true, useUnifiedTopology: true });

const Livro = require('./modelo/livro-schema');

const livro = new Livro({
  _id: new mongoose.Types.ObjectId(),
  titulo: "Use a Cabeça! Java",
  codigoEditora: 1,
  resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em...",
  autores: [] // Adicione os autores aqui
});

livro.save()
  .then(result => console.log(result))
  .catch(err => console.error(err));
