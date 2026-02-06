import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SceneSetup from './pages/SceneSetup'
import Rehearsal from './pages/Rehearsal'
import Help from './pages/Help'
import Donate from './pages/Donate'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scene" element={<SceneSetup />} />
        <Route path="/rehearsal" element={<Rehearsal />} />
        <Route path="/help" element={<Help />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  )
}
