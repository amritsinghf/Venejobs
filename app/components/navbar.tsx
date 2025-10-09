// app/components/navbar.tsx

import "./navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image src="/vj.png" alt="Venejobs Logo" width={32} height={32} />
        <span className="brand-name">Venejobs</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#">Find Talent</a></li>
        <li><a href="#">Post a Job</a></li>
        <li><a href="#">Find Work</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <div className="navbar-auth">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}
