import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import home from "./paginas/home"
import usuario from './paginas/usuario'
import favoritos from './paginas/favoritos'
import pagina404 from './paginas/pagina404'
import api from './paginas/api/api'

function App() {

  return (
    <Router>
      <Link>
        <Route path='/home' exact element={ home }>
          <home />
        </Route>
        <Route path='/usuario' element={ usuario }>
          <usuario />
        </Route>
        <Route path='/favoritos' element={ favoritos }>
          <favoritos />
        </Route>
        <Route path='/pagina404' element={ pagina404 }>
          <pagina404 />
        </Route>
      </Link>
    </Router>
  )
}

export default App
