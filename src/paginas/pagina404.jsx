import React from 'react'
import imagem from '../componentes/imgs/erro.jpg'

const pagina404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna" >
            <img className="erro-imagem" src={imagem} alt="ilustração erro" />
            <p className="naoencontrado-texto">
                Ops, essa página não existe ):
            </p>
        </main>
    )
}

export default pagina404