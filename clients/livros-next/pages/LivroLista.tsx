import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css';
import { Livro } from "@/classes/modulo/Livro";
import { Menu } from "@/componentes/Menu";
import { LinhaLivro } from "@/componentes/LinhaLivro";

const baseURL = 'http://localhost:3000/api/livros';

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const obterLivros = async () => {
            try {
                const response = await fetch(baseURL);
                const data = await response.json();
                setLivros(data);
                setCarregado(true);
            } catch (error) {
                console.error('Erro ao obter livros:', error);
            }
        };

        if (!carregado) {
            obterLivros();
        }
    }, [carregado]);

    const excluirLivro = async (codigo: number) => {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setCarregado(false);
            } 
        } catch (error) {
            console.error('Erro ao excluir livro', error);
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
            </Head>

            <Menu />

            <main className={styles.main}>
                <h1 className={styles.title}>Lista de Livros</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th></th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(livros) && livros.length > 0 ? (
                            livros.map((livro, index) => (
                                <LinhaLivro
                                    livro={livro}
                                    excluir={() => excluirLivro(livro.codigo).then(() => setCarregado(false))}
                                    key={index}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>Nenhum livro encontrado.</td>
                            </tr>
                        )}      
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;