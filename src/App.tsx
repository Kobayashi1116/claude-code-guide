import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Skills from './pages/Skills'
import GettingStarted from './pages/GettingStarted'
import MCP from './pages/MCP'
import Tips from './pages/Tips'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="skills" element={<Skills />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="mcp" element={<MCP />} />
          <Route path="tips" element={<Tips />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
