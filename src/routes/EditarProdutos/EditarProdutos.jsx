import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ListaProdutos from '../../components/ListaProdutos';

const EditarProdutos = () => {
   
    const lista = ListaProdutos;
    const navegacao = useNavigate();
    const {id} = useParams();

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0];

    return (
        <main>
            <h1>Editar Produtos</h1>
            <p>Editando os dados do produto: produto {produto.nome}</p>
            <button>Salvar</button>
        </main>
    );
}

export default EditarProdutos;

