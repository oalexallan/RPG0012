import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Menu } from '@/componentes/Menu';
import { useRouter } from 'next/router';
import { ControleEditora } from '@/classes/controle/ControleEditora';

const baseURL = 'http://localhost:3000/api/livros';
const controleEditora = new ControleEditora();

const LivroDados: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const navigate = useRouter();

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCodEditora = parseInt(event.target.value);
        setCodEditora(selectedCodEditora);
    };
    
    const opcoes = controleEditora.getEditoras().map((editoras) => ({
        value: editoras.codEditora,
        text: editoras.nome,
    }));

    const incluirLivro = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const novoLivro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: codEditora,
        };

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoLivro),
            });

            if (response.ok) {
                navigate.push('/LivroLista');
            }
        } catch (error) {
            console.error('Erro ao incluir livro:', error);
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
            </Head>

            <Menu />

            <main className={styles.main}>
                <h1 className={styles.title}>Incluir Novo Livro</h1>

                <form onSubmit={incluirLivro}>
                    <div className='mb-3'>
                        <label htmlFor="titulo" className='form-label'>
                            Título
                        </label>
                        <input 
                            type="text"
                            className='form-control'
                            id='titulo'
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)} 
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="resumo" className='form-label'>
                            Resumo
                        </label>
                        <textarea 
                            className='form-control'
                            id='resumo'
                            value={resumo}
                            onChange={(e) => setResumo(e.target.value)} 
                        ></textarea>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="autores" className='form-label'>
                            Autores (um por linha)
                        </label>
                        <textarea
                            className='form-control'
                            id='autores'
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)} 
                        ></textarea>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="editora" className='form-label'>
                            Editora
                        </label>
                        <select
                            className='form-control'
                            id='editora'
                            value={codEditora}
                            onChange={tratarCombo} 
                        >
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Salvar
                    </button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;