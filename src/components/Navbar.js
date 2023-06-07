import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="landing" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="reviews" smooth={true}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true}>
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
