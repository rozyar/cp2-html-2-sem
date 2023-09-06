import React from 'react';
import ListaProdutos from '../../components/ListaProdutos';
import { Link } from 'react-router-dom';

const Produtos = () => {
    return (
        <main>
            <h1>Produtos</h1>
            {ListaProdutos.map(prod => (
                <div key = {prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto : {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    );
}

export default Produtos;
