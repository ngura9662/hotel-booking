
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Book from './Book'
import Order from './Order'
import Terms from './Terms'
import './App.css'

function App() {


  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </Router>
  )
}

export default App
