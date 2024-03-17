import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { FaSave } from 'react-icons/fa';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

export default function LivroDados() {
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(0);
    const opcoes = controleEditora.getEditoras().map((editora, index) => ({value: editora.codEditora, text: editora.nome}));
    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };
        controleLivro.incluir(livro);
        navigate('/');
    };

    return (
        <main className="container">
            <h1 className="my-4">Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="form-group">
                    <label>Título:</label>
                    <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Resumo:</label>
                    <textarea type="text" className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Editora:</label>
                    <select className="form-control" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao, index) => (
                            <option key={index} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Autores (1 por linha):</label>
                    <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary"><FaSave /> Salvar Dados</button>
            </form>
        </main>
    );
};
