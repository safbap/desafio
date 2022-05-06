import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import home from './paginas/home'
import usuario from './paginas/usuario'
import favoritos from './paginas/favoritos'
import pagina404 from './paginas/pagina404'

function App() {

  return (
    <Router>
      <Switch>
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
      </Switch>
    </Router>
  )
}

export default App
