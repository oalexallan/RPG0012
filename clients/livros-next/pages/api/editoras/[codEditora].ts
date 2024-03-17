// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next'
import { controleEditora } from '.'

const handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const codEditora = Number(req.query.codEditora)
    const nomeEditora = controleEditora.getNomeEditora(codEditora)
    res.status(200).json({ nome: nomeEditora })
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}

export default handleRequest
