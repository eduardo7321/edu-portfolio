import css from "../../images/css.png"
import spring from "../../images/spring.png"
import vue from "../../images/vue.png"
import java from "../../images/java.png"
import html from "../../images/html.png"
import javascript from "../../images/javascript.png"
import node from "../../images/node.png"
import react from "../../images/react.png"
import git from "../../images/github.png"
import { Tecnologia } from "./Tecnologia/Tecnologia"
import './style.css'

export function SectionTecnologias() {
  function CriaTecnologias(img,tecnologia, descricao){
    return { img, tecnologia, descricao }
  }
  const tecnologias = [
    CriaTecnologias(react,"react","uma biblioteca javascript que ajuda na criação de sites com interfaces reativas ao usuario"),
    CriaTecnologias(javascript,"javascript","uma das maiores linguagens de programação do mundo tem tem como objetivo criação de paginas dinamicas"),
    CriaTecnologias(node,"node","utilizado para criação de apis utilizando javascript como linguagem de programação"),
    CriaTecnologias(git,"git","sistema de controle de verções usado para desenvolver softweres"),
    CriaTecnologias(css,"css","uma tecnologia para estilização de paginas web"),
    CriaTecnologias(html,"html","linguagem de marcação utilizada para criação de paginas web"),
    CriaTecnologias(java,"java","Java é uma linguagem de programação orientada a objeto desenvolvida para permitir que desenvolvedores criem uma plataforma continua."),
    CriaTecnologias(spring,"spring","O Spring Boot é um framework Java open source que tem como objetivo facilitar esse processo em aplicações Java"),
    CriaTecnologias(vue,"vue JS","Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."),
  ]
  return (
    <section className="tecnologias" id="Tecnologias">
      <div className="container">
        <h2>VEJA AQUI ALGUMAS TECNOLOGIAS QUE TRABALHO</h2>
          <main>
            {tecnologias.map(tecnologiaBox => (
              <Tecnologia key={tecnologiaBox.tecnologia} img={tecnologiaBox.img} tecnologia={tecnologiaBox.tecnologia} descricao={tecnologiaBox.descricao} />
            ))}
          </main>
      </div>
    </section>
  )
}