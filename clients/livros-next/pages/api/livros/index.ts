// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { ControleLivro } from '@/classes/controle/ControleLivros'

export const controleLivro = new ControleLivro()

const handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros()
      res.status(200).json(livros)
    } else if (req.method === 'POST') {
      controleLivro.incluir(req.body)
      res.status(200).json({ message: 'Livro incluído com sucesso' })
    } else {
      res.status(405).json({ message: 'Método não permitido' })
    }
  } catch (e) {
    res.status(500).json({ message: 'Exceção ocorrida no servidor' })
  }
}

export default handleRequest
