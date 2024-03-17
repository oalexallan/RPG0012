// RPG0010/livros-next/componentes/Menu.tsx
import Link from "next/link";
import React from "react";

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LivroLista" className="nav-link">
                                Catálogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LivroDados" className="nav-link">
                                Novo
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};