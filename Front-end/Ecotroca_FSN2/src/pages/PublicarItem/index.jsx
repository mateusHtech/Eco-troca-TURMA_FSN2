import style from './PublicarItem.module.css';
import EcoTrocaMenu from '../../components/EcoTrocaMenu';

function PublicarItem() {
    return (
        <div>
            <EcoTrocaMenu />
            
            <div className={style.container}>
                <h1>Publicar um Item</h1>

                <form className="form">

                    {/*upload de imagem */}
                    <div className={style.upload}>
                        <label htmlFor="imagem">Adicionar Imagem</label>
                        <input type="file" id="imagem" name="imagem" />
                    </div>

                    {/* Nome do item*/}
                    <div className={style.campo}>
                        <label htmlFor="nome">Nome do Item</label>
                        <input type="text" id="nome" name="nome" placeholder="Ex: Camisa Preta" />
                    </div>

                    {/*Descrição*/}
                    <div className={style.campo}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="descricao" name="descricao" placeholder="Descreva o item..."></textarea>
                    </div>

                    {/* Categoria */}
                    <div className={style.campo}>
                        <label htmlFor="categoria">Categoria</label>
                        <select id="categoria" name="categoria">
                            <option value="">Selecione uma categoria</option>
                            <option value="roupas">Roupas</option>
                            <option value="eletronicos">Eletrônicos</option>
                            <option value="moveis">Móveis</option>
                            <option value="livros">Livros</option>
                        </select>
                    </div>

                    {/*Cidade/Bairro */}
                    <div className={style.campo}>
                        <label htmlFor="localizacao">Cidade/Bairro</label>
                        <input type="text" id="localizacao" name="localizacao" placeholder="Centro, Fortaleza" />
                    </div>

                    {/*Botão */}
                    <button type="submit" className={style.botao}>Publicar Item</button>                
                </form>
            </div>
        </div>
    )
}

export default PublicarItem; 