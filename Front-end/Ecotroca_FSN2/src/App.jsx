import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import PublicarItem from './pages/PublicarItem'
import MeuPerfil from './pages/MeuPerfil'

function App() {
  return (
    <BrowserRouter> 
    
      <Routes>
        <Route path="/publicar" element={<PublicarItem />} />
        <Route path="/meuperfil" element={<MeuPerfil /> } />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App

