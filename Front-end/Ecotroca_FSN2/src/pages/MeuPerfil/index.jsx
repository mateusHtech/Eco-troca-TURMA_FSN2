import React, { useState } from 'react';
import styles from './MeuPerfil.module.css';

function MeuPerfil() {
  const [activeTab, SetActiveTab] = useState("itens");

const itemsMock = [
  {
    id: 1,
    title: "Livros",
    description: "Livros usados",
  },
  {
    id: 2,
    title: "Roupas",
    description: "Roupas em bom estado",
  },
  {
    id: 3,
    title: "Brinquedos",
    description: "Brinquedos pouco usados",
  },
];

  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>EcoTroca</h1>
        <div className={styles.userSettings}>
          <button className={styles.settingsBtn}>⚙</button>
        </div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.title}>Meu Perfil</h2>

        <nav className={styles.nav}>
          <h2>EcoTroca</h2>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/publicar">Publicar Item</a></li>
            <li><a href="/meus-itens">Meus Itens</a></li>
            <li><a href="/perfil">Perfil</a></li>
          </ul>
        </nav>

        {activeTab === "itens" && (
          <ul className={styles.itemList}>
            {itemsMock.map((item) => (
              <li key={item.id} className={styles.item}>
                <div className={styles.itemInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <button className={styles.editBtn}>Editar</button>
              </li>
            ))}
          </ul>
        )}

        {activeTab === "recebidas" && (
          <div className={styles.placeholder}>Você ainda não recebeu ofertas.</div>
        )}

        {activeTab === "enviadas" && (
          <div className={styles.placeholder}>Você ainda não enviou ofertas.</div>
        )}
      </main>
    </div>
  );
}

export default MeuPerfil;