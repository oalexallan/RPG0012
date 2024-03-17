import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link text-white"> Catálogo </Link></li>
                    <li><Link to={'/dados'} className="nav-link text-white">Novo</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<LivroLista />} />
                <Route path='/dados' element={<LivroDados />} />
            </Routes>
        </Router>
    );
}

export default App;
