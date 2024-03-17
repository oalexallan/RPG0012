// RPG0010/livros-next/componentes/LinhaLivro.tsx
import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modulo/Livro";
import React from "react";

const controleEditora = new ControleEditora()

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const {livro, excluir} = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);  
    
    return (
        <tr>
        <td>{livro.titulo}<br />
            <button className="btn btn-sm btn-danger" onClick={() => excluir()}>
            Excluir
            </button>
        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td></td>
        <td>
            <ul>{livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}</ul>
        </td>
        </tr>
    );
};