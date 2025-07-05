
import PublicarItem from './pages/PublicarItem'
import MeuPerfil from './pages/MeuPerfil'

function App() {
  return (

    
      <Routes>
        <Route path="/publicar" element={<PublicarItem />} />
        <Route path="/meuperfil" element={<MeuPerfil /> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App

