// pages/api/editoras/index.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { ControleEditora } from '@/classes/controle/ControleEditora'


export const controleEditora = new ControleEditora()

const handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const editoras = controleEditora.getEditoras()
    res.status(200).json(editoras)
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}

export default handleRequest
