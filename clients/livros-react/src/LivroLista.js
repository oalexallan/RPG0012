import React, { Component } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

class LinhaLivro extends Component {
    render() {
        const { livro, excluir } = this.props;
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

        return (
            <tr>
                <td>
                    {livro.titulo}
                    <button className="btn btn-danger btn-sm ml-2" onClick={() => excluir(livro.codigo)}>Excluir</button>
                </td>
                <td>{livro.resumo}</td>
                <td>{nomeEditora}</td>
                <td>
                    <ul>
                        {livro.autores.map((autor, index) => (
                            <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
            </tr>
        );
    }
}

export default class LivroLista extends Component {
    state = {
        livros: [],
        carregado: false
    };

    componentDidMount() {
        this.setState({
            livros: controleLivro.obterLivros(),
            carregado: true
        });
    }

    excluir = (codigo) => {
        controleLivro.excluir(codigo);
        this.setState({ carregado: false });
    };

    render() {
        const { livros } = this.state;

        return (
            <main className="container">
                <h1 className="my-4">Catálogo de Livros</h1>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={this.excluir} />
                        ))}
                    </tbody>
                </table>
            </main>
        );
    }
};
