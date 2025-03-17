import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from "react-router-dom"
import CrearReservas from "./CrearReservas.jsx"
import ConsumoReserva from "./consumoReserva.jsx"
import ActualizarReserva from "./ActualizarReserva.jsx"


function App() {
  

  return (
    <div>
      <Router>
        <nav>
          <ul>
           
            <li><Link to="/ListarReservas">Listar Reserva</Link></li>
            <li><Link to="/CrearReservas">Crear Reservas</Link></li>
          
            
          </ul>
        </nav>
      <Routes>
          <Route path="/ListarReservas" element={<ConsumoReserva/>}></Route>
          <Route path="/CrearReservas" element={<CrearReservas/>}></Route>
          <Route path="/ActualizarReserva/:id" element={<ActualizarReserva/>}></Route>
          
      </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
