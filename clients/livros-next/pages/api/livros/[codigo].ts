// pages/api/livros/[codigo].ts
import { NextApiRequest, NextApiResponse } from 'next'
import { controleLivro } from '.'

const handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const codigo = Number(req.query.codigo)
      controleLivro.excluir(codigo)
      res.status(200).json({ message: 'Livro excluído com sucesso' })
    } else {
      res.status(405).json({ message: 'Método não permitido' })
    }
  } catch (e) {
    res.status(500).json({ message: 'Exceção ocorrida no servidor' })
  }
}

export default handleRequest
