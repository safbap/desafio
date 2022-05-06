import React from 'react'
import imagem from '../componentes/imgs/lupa.jpg'

//campo de busca
function App() {
    return (
      <div className="App">
        <div className="container-input">
          <input type="text"></input>
        </div>
        <div className="container-list"></div>  
          <ul>
            Digite o nome de um usuário
          </ul>

  
      </div>
    )
  }

  //header
const home = () => {
    return(
        <header className="home container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone">                    
                </span>
            </div>
            <div className="home-container">
                <a href="/" className="flex flex--centro">
                    <img className="home__logo" src={imagem} alt="Logo busca" />
                    <h1 className="home__titulo">Pesquisa no Github</h1>
                </a>
            </div>

            <nav className="menu-home">
                <ul className="menu-home">
                    <li><a href="#" className="menu-home menu-home--home">HOME</a></li>
                    <li><a href="/usuario" className="menu-home">USUÁRIO</a></li>
                    <li><a href="/favoritos" className="menu-home">FAVORITOS</a></li>
                    </ul>   
            </nav>
            <div className="menu-home-background"></div>
        </header>
    )
}


export default home