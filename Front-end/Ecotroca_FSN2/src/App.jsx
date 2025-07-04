import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PublicarItem from './pages/PublicarItem'

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/publicar" element={<PublicarItem />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
