import { useState } from 'react';
import './style.css'
import menu from "../../images/menu.png"
//import Projetos from "../SectionTop/index"

import logo from "../../images/logoedu.PNG"

function Header() {
  const [menuVisibilidade, setMenuVisibilidade] = useState(true)
  
  function mobileMenu(){
    setMenuVisibilidade(!menuVisibilidade)
  }

  return (
    <header className="header" id="Home">
      <div className="container">

      

        <img className="minhalogo" src={logo} />
        

        <img src={menu} onClick={mobileMenu} className="btn-mobile" alt="menu mobile" />
        <nav className="desktop">
          <ul>
            <li><a href="#SobreMim">Sobre</a></li>
            <li><a href="#Tecnologias">Tecnologias</a></li>
            <li><a href="#Projetos">Projetos</a></li> 
            <li><a href="#Contatos">Contatos</a></li> 
          </ul>
        </nav>
      </div>
      {
        
        !menuVisibilidade && (
          <nav className="mobile">
          <ul>
            <li><a href="#SobreMim">Sobre</a></li>
            <li><a href="#Tecnologias">Tecnologias</a></li>
            <li><a href="#Projetos">Projetos</a></li> 
            <li><a href="#Contatos">Contatos</a></li>
          </ul>
        </nav>
        )
        
      }

    </header>
  )
}

export default Header;