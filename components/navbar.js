import Link from "next/link";
import Image from "next/image";
import logo from "../assets/pokemon_logo.png";

function Navbar() {
  return (
    <div className="topnav">
      <Link href="/" className="navItem">
        <Image src={logo} width={150} height={50} alt="Logo" />
      </Link>
      <Link href="/" className="navItem">
        Home
      </Link>
    </div>
  );
}

export default Navbar;
