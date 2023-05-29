import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(chave, valor) {
        setValues({
          ...values,
          [chave]: valor,
        });
    }
    
    function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value,
        );
    }
    
      // ============
    
    useEffect(() => {
        if (window.location.href.includes('localhost')) {
          const URL = 'http://localhost:8080/categorias';
        //   fetch(URL)
        //     .then(async (respostaDoServer) => {
        //       if (respostaDoServer.ok) {
        //         const resposta = await respostaDoServer.json();
        //         setCategorias([
        //           ...resposta,
        //         ]);
        //         return;
        //       }
        //       throw new Error('Não foi possível pegar os dados');
        //     });
        }
    }, []);
      
    return (
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
  
        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
  
          setCategorias([
            ...categorias,
            values,
          ]);
  
          setValues(valoresIniciais);
        }}
        >
  
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
  
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
  
          <button className="ButtonCadastro">
            Cadastrar
          </button>
        </form>
  
        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}
  
        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;
/*
import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form>

                <label>
                    Nome da Categoria:
                    <input 
                        type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para Home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;
*/