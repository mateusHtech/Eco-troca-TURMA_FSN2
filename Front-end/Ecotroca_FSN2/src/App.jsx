import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicarItem from './pages/PublicarItem';
import Home from './pages/Home';
import DetalhesItem from './pages/ItemDetalhes';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/publicar" element={<PublicarItem />} />
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<DetalhesItem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
