import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/players">Player</Link>
        </li>
      </ul>
    </nav>
  );
}