import './style.css'
import { Projeto } from "./Projeto/Projeto"
import flappybird from "../../images/flappybird.PNG"
import calculadora from "../../images/calculadora.PNG"
import montyhall from "../../images/montyhall.PNG"
import apiRestCities from "../../images/apirestCities.PNG"
import cadastroDeUsuarios from "../../images/cadastroDeUsuarios.PNG"
import cadastroDeEventos from "../../images/cadastroDeEventos.PNG"

export function SectionProjetos(){
  function criaProjeto(img, descricao, link){
    return { img, descricao, link }
  }
  const projetos = [
    
    criaProjeto(cadastroDeEventos,'Projeto cadastro de eventos realizado em Java e springboot, utilizou-se o padrão MVC banco de dados postgres e stilo materialize','https://cadastro-de-eventos-app.herokuapp.com/eventos'),
    criaProjeto(calculadora,'Aplicação de uma calculadora desenvolvida em Vue JS','https://serene-goldberg-92102a.netlify.app/'),
    criaProjeto(montyhall,'Projeto de aplicação que explora o problema Monty Halldesenvolvido desenvolvido em Vue JS','https://montyhall-vue.herokuapp.com/'),
    criaProjeto(apiRestCities,'API Rest desenvolvida em Java e springboot onde calcula a distância entre duas cidades do Brasil. O banco de dados utilizado foi o Postgres','https://serene-mountain-49492.herokuapp.com/cities'),
    criaProjeto(cadastroDeUsuarios,'Aplicação de cadastro de usuários feita em Java e springboot utilizando o padrão MVC, o front-end utilizou-se o bootstrap. O banco de dados H2','https://cadastro-de-usuario-spring-mvc.herokuapp.com/jedi'),
    criaProjeto(flappybird,'Projeto  Flappybird feito em java script, css e html onde foi o tilizado o conceito de manipulação da DOM','https://eduardo7321.github.io/'),
  ]
  
  return (
    <section className="projetos" id="Projetos">
      <div className="container">
        <h3>ABAIXO TEM ALGUNS DOS MEUS PROJETOS</h3>
        <main>
          {projetos.map(projeto => (
            <Projeto img={projeto.img} descricao={projeto.descricao} link={projeto.link} />
          ))}
        </main>
      </div>
    </section>
  )
}