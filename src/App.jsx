import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import home from './paginas/home'
import usuario from './paginas/usuario'
import favoritos from './paginas/favoritos'
import pagina404 from './paginas/pagina404'

function App() {

  return (
    <Router>
        <Route exact path='/home' element={ home }>
          <home />
        </Route>
        <Route exact path='/usuario' element={ usuario }>
          <usuario />
        </Route>
        <Route exact path='/favoritos' element={ favoritos }>
          <favoritos />
        </Route>
        <Route exact path='/pagina404' element={ pagina404 }>
          <pagina404 />
        </Route>
    </Router>
  )
}

export default App
