import {Link} from 'react-router-dom'


function Nav() {
  return (
    <header> 
      <nav className="nav">
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Terms">Terms</Link>
      </nav>
    </header>
   
  )
}
export default Nav