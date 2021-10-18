import '../styles/navBar.css'
import { Link } from 'react-scroll'

function NavBar() {
    return (
        <nav>
            <Link className='nav-link' to='languages' containerId='App' smooth duration={250}>Langauges</Link>
            <Link className='nav-link' to='skills' containerId='App' smooth duration={250}>Skills</Link>
            <Link className='nav-link' to='projects' containerId='App' smooth duration={250}>Projects</Link>
        </nav>
    )
}

export default NavBar