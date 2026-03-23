import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import {User,ShoppingCart} from "lucide-react"


interface NavbarProps {
fontSize?: string;
    textColor?: string;
    gap?: string;
    justify?: string;
    direction?: string;
    Image?: string;
    Icone?: string;
}

const Navbar = ({
    fontSize = "text-sm",
    textColor = "text-black",
    justify = "justify-content",
    direction = "flex-row",
}: NavbarProps) => {

  const linkStyle = `
    ${fontSize}
    font-normal
    ${textColor}
    inline-block
    px-4
    py-2
    rounded-full
    transition-all
    duration-300
    ease-in-out
    hover:bg-black
    hover:shadow-xl
    hover:-translate-y-1
    text-sm
  `;

  return (
    <nav className="flex justify-between border-b-2">
        <div className="px-8 py-4">
         <img src={logo} alt="Logo" className={`h-10 w-10`} />
         </div>
      <ul className={`flex font-medium${direction} ${justify}items-center w-full justify-center border-r-2 border-l-2 p-4`}>
        <li><Link to="/" className={linkStyle}>Home</Link></li>
        <li><Link to="/shop" className={linkStyle}>Shop</Link></li>
        <li><Link to="/contact" className={linkStyle}>Contact</Link></li>
      </ul>
      <div className="flex gap-6 p-4">
            <User/>
            <ShoppingCart/>
          
        </div>
    </nav>
  );
};

export default Navbar;