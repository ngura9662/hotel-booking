import {Link} from 'react-router-dom'
import './index.css'


function Nav() {
  return (
    <header> 
      <nav className="nav">
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Terms">Terms</Link>
       <Link to="/Contact">Contact</Link>
      </nav>
    </header>
   
  )
}
export default Nav