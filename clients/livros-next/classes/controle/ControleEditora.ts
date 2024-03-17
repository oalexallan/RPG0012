import { Editora } from "../modulo/Editora";

let editoras: Array<Editora> = [
    new Editora(1, 'Editora 1'),
    new Editora(2, 'Editora 2'),
    new Editora(3, 'Editora 3')
];

export class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        let editora = editoras.filter(e => e.codEditora === codEditora)[0];
        return editora ? editora.nome : undefined;
    }
}
