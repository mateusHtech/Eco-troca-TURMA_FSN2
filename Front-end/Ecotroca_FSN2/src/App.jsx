import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicarItem from './pages/PublicarItem'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/publicar" element={<PublicarItem />} />
      </Routes>
    </Router>
  )
}

export default App
