import { useState } from 'react';
import './style.css'
import menu from "../../images/menu.png"

function Header() {
  const [menuVisibilidade, setMenuVisibilidade] = useState(true)
  
  function mobileMenu(){
    setMenuVisibilidade(!menuVisibilidade)
  }

  return (
    <header className="header">
      <div className="container">
        <h1>EDUARDO SILVA</h1>

        <img src={menu} onClick={mobileMenu} className="btn-mobile" alt="menu mobile" />
        <nav className="desktop">
          <ul>
          <li>Home</li>
            <li>Tecnologias</li>
            <li>Projetos</li>          
          </ul>
        </nav>
      </div>
      {
        
        !menuVisibilidade && (
          <nav className="mobile">
          <ul>
            <li>Home</li>
            <li>Tecnologias</li>
            <li>Projetos</li>
          </ul>
        </nav>
        )
        
      }

    </header>
  )
}

export default Header;