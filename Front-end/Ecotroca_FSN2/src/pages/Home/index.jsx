import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Importação das imagens dos produtos
import bicicletaImg from '../../assets/imagensdaHome/bicicletademontanha.jpg';
import livroImg from '../../assets/imagensdaHome/Livro-Senhordosaneis.webp';
import cameraImg from '../../assets/imagensdaHome/cameraDSLR.jpg';
import mesaImg from '../../assets/imagensdaHome/mesadejantar.jpg';
import sofaImg from '../../assets/imagensdaHome/sofa2lugares.jpg';
import guitarraImg from '../../assets/imagensdaHome/guitarra-eletrica.jpg';

import styles from './Home.module.css';

// Dados dos produtos
const produtosOriginais = [
  {
    id: 1,
    nome: "Bicicleta de montanha",
    categoria: "Esportes",
    cidade: "São Paulo",
    imagem: bicicletaImg
  },
  {
    id: 2,
    nome: "Livro 'O Senhor dos Anéis'",
    categoria: "Livros",
    cidade: "Rio de Janeiro",
    imagem: livroImg
  },
  {
    id: 3,
    nome: "Câmera DSLR",
    categoria: "Eletrônicos",
    cidade: "Belo Horizonte",
    imagem: cameraImg
  },
  {
    id: 4,
    nome: "Mesa de jantar",
    categoria: "Móveis",
    cidade: "Curitiba",
    imagem: mesaImg
  },
  {
    id: 5,
    nome: "Sofá de dois lugares",
    categoria: "Móveis",
    cidade: "Porto Alegre",
    imagem: sofaImg
  },
  {
    id: 6,
    nome: "Guitarra elétrica",
    categoria: "Instrumentos Musicais",
    cidade: "Salvador",
    imagem: guitarraImg
  },
];

// Categorias para o filtro
const categorias = [
  "Categoria",
  "Eletrônicos",
  "Esportes",
  "Livros",
  "Móveis",
  "Instrumentos Musicais",
  "Roupas"
];

// Cidades para o filtro
const cidades = [
  "Cidade/Bairro",
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
  "Salvador",
  "Aldeota; Fortaleza"
];

const Home = () => {
  // Estado para gerenciar os produtos filtrados e os filtros
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtosOriginais);
  const [filtroCategoria, setFiltroCategoria] = useState('Categoria');
  const [filtroCidade, setFiltroCidade] = useState('Cidade/Bairro');
  const [busca, setBusca] = useState('');
  
  const navigate = useNavigate();

  // Essa é aFunção para filtrar os produtos baseada nos estados dos filtros
  const filtrarProdutos = useCallback(() => {
    let temp = produtosOriginais; //aqui e pra começar com todos os produtos que botei
    
    if (filtroCategoria !== 'Categoria') {
      temp = temp.filter(p => p.categoria === filtroCategoria);
    }
    
    if (filtroCidade !== 'Cidade/Bairro') {
      temp = temp.filter(p => p.cidade === filtroCidade);
    }
    
    if (busca.trim() !== '') {
      const termoBusca = busca.toLowerCase();
      temp = temp.filter(p =>
        p.nome.toLowerCase().includes(termoBusca) ||
        p.categoria.toLowerCase().includes(termoBusca) ||
        p.descricao.toLowerCase().includes(termoBusca) ||
        p.cidade.toLowerCase().includes(termoBusca) // busca por cidade também
      );
    }
    setProdutosFiltrados(temp); 
  }, [filtroCategoria, filtroCidade, busca]); 

  useEffect(() => {
    filtrarProdutos();
  }, [filtrarProdutos]);

  return (
    <div className={styles.page}>
      {/* Header da página */}
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => navigate('/')}>EcoTroca</div> {/* quando clica na logo da tela de detalhes volta pra a Home */}
        <div className={styles['header-buttons']}>
          <button
            className={styles['btn-primary']}
            onClick={() => navigate('/publicar')} // leva para a tela de publicar o item
          >
            Cadastrar Item
          </button>
          <button
            className={styles['btn-secondary']}
            onClick={() => navigate('/login')} // leva para a tela de login
          >
            Login
          </button>
        </div>
      </header>

      {/* Seção de Filtros */}
      <div className={styles.filters}>
        <select
          className={styles['filter-select']}
          value={filtroCategoria}
          onChange={e => setFiltroCategoria(e.target.value)}
        >
          {categorias.map(c => <option key={c}>{c}</option>)}
        </select>
        <select
          className={styles['filter-select']}
          value={filtroCidade}
          onChange={e => setFiltroCidade(e.target.value)}
        >
          {cidades.map(c => <option key={c}>{c}</option>)}
        </select>
        <input
          className={styles['search-input']}
          type="text"
          placeholder="Buscar por palavra-chave"
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
      </div>

      {/* Grid de Produtos */}
      <div className={styles['products-grid']}>
        {produtosFiltrados.length === 0 && (
          <p className={styles['nenhum-produto']}>Nenhum produto encontrado.</p>
        )}
        
        {/* Renderiza os cards dos produtos filtrados */}
        {produtosFiltrados.map(p => (
          <div className={styles['product-card']} key={p.id}>
            <img
              src={p.imagem}
              alt={p.nome}
              style={{
                width: "100%",
                borderRadius: "12px 12px 0 0",
                marginBottom: 10,
                height: 160,
                objectFit: 'cover'
              }}
            />
            <div className={styles['product-title']}>{p.nome}</div>
            <div className={styles['product-category']}>{p.categoria}</div>
            <div className={styles['product-location']}>{p.cidade}</div>
            <div className={styles['product-description']}>{p.descricao}</div>
            <button
              className={styles['product-btn']}
              onClick={() => navigate(`/detalhes/${p.id}`)} // leva para a tela de detalhes do item
            >
              Ver detalhes
            </button>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <footer style={{
        background: "#59ce3b",
        color: "#fff",
        marginTop: 40,
        padding: 16,
        textAlign: "center",
        borderRadius: 0
      }}>
        ©2025 EcoTroca. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Home;
