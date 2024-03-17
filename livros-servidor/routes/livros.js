const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  const livro = req.body;
  const resultado = await incluir(livro);
  if (resultado) {
    res.json({ mensagem: 'Livro incluído com sucesso!' });
  } else {
    res.json({ mensagem: 'Falha ao incluir o livro.' });
  }
});

router.delete('/:codigo', async (req, res) => {
  const codigo = req.params.codigo;
  const resultado = await excluir(codigo);
  if (resultado.deletedCount > 0) {
    res.json({ mensagem: 'Livro excluído com sucesso!' });
  } else {
    res.json({ mensagem: 'Falha ao excluir o livro.' });
  }
});

module.exports = router;
