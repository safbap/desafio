import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import imagem from '../componentes/imgs/lupa.jpg'
import '../paginas/navbar.css' 

const home =(() => {
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
})

//header
function navbar() {
  return (
    <header className="home container">
      <div className="menu-hamburguer">
        <span className="menu-hamburguer__icone">
        </span>
      </div>
      <div className="home-container">
        <div className="navbar">
          <Link to="/" className="flex flex--centro">
            <img className="home__logo" src={imagem} alt="Logo busca" />
            <h1 className="home__titulo">Pesquisa no Github</h1>
          </Link>
        </div>
      </div>
      <nav className="menu-home">
        <ul className="menu-home">
          <ul className="list">
            <li className="item">
              <Link to="#" className="menu-home menu-home--home">HOME</Link></li>
            <li className="item">
              <Link to="/usuario" className="menu-home">USUÁRIO</Link></li>
            <li className="item">
              <Link to="/favoritos" className="menu-home">FAVORITOS</Link></li>
          </ul>
        </ul>
      </nav>
      <div className="menu-home-background"></div>
    </header>
  )
}


export default home