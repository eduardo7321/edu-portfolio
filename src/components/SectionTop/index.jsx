import './style.css'
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import eu from "../../images/eu.jpg"


export function SectionTop(){
  return (
    <section className="sectionTop" id="SobreMim">
      <div className="container">
        <div className="eu">
            <img className="my-img" src={eu} alt="minha imagem" />
            <div className="text-wraper-box">
                <h2>Eduardo Silva</h2>
                <p>Entusiasta da tecnologia, atualmente faz pós-graduação em 
                  análise e desenvolvimento de programas. Tem interesse nas áreas de
                  Backend e Front-end. Busca oportunidades de júnior ou estágio.
                  email: eduardo.jose184@gmail.com</p>
                <ul>
                    <li>
                        <a title="link para o meu github" target="_blanck" href="https://github.com/eduardo7321">
                         <img src={github} width="30" alt="gitHub" />
                        </a>
                    </li>
                    <li className="margin">
                      <a title="link para o meu linkedin" target="_blanck" href="https://www.linkedin.com/in/eduardojose184/">
                        <img src={linkedin} width="30" alt="linkedin" />
                      </a>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  )
}


/*export default props =>
<section className="sectionTop">
      <div className="container">
        <div className="eu">
            <img className="my-img" src={eu} alt="minha imagem" />
            <div className="text-wraper-box">
                <h2>Eduardo Silva</h2>
                <p>Entusiasta da tecnologia, atualmente faz pós-graduação em 
                  análise e desenvolvimento de programas. Tem interesse nas áreas de
                  Backend e Front-end. Busca oportunidades de júnior ou estágio.
                  email: eduardo.jose184@gmail.com</p>
                <ul>
                    <li>
                        <a title="link para o meu github" target="_blanck" href="https://github.com/eduardo7321">
                         <img src={github} width="30" alt="gitHub" />
                        </a>
                    </li>
                    <li className="margin">
                      <a title="link para o meu linkedin" target="_blanck" href="https://www.linkedin.com/in/eduardojose184/">
                        <img src={linkedin} width="30" alt="linkedin" />
                      </a>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </section>
    */