import { Livro } from "../modulo/Livro";

let livros: Array<Livro> = [
    new Livro(1, 1, 'Título 1', 'Resumo 1', ['Autor1']),
    new Livro(2, 2, 'Título 2', 'Resumo 2', ['Autor2']),
    new Livro(3, 3, 'Título 3', 'Resumo 3', ['Autor3'])
];

export class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        let maxCodigo = Math.max(...livros.map(l => l.codigo));
        livro.codigo = maxCodigo + 1;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        let index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
