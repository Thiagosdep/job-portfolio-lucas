import React, { useRef, useState } from 'react';
import './index.css';
import Lucas from "../assets/images/lucas.jpg";
import Perfil from "../assets/images/perfil.jpg";
import Logo from "../assets/icons/logo.svg"
import BlackLogo from "../assets/icons/logoblack.svg"
import Behace from "../assets/icons/behace.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Facebook from "../assets/icons/facebook.svg"
import Instagram from "../assets/icons/instagram.svg"
import Itau from "../assets/projects/itau.jpeg"
import Flex from "../assets/projects/flex.jpeg"
import Lions from "../assets/projects/lions.jpeg"
import Loading from "../assets/projects/loading.jpeg"
import Pinacoteca from "../assets/projects/pinacoteca.jpeg"
import T4f from "../assets/projects/t4f.jpeg"
import Saraiva from "../assets/projects/saraiva.jpeg"
import menuHamburguer from "../assets/icons/menu.svg"

export default function Home() {
  const [showMenuModal, setShowMenuModal] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
  <>
    <section ref={homeRef} className="mainSection">
      <nav className="navHeader">
        <img src={Logo} alt="Logo"/>
        <div className="menuItems">
          <span onClick={() => scrollToRef(homeRef)} className="menuItem borderRight">home</span>
          <span onClick={() => scrollToRef(aboutRef)} className="menuItem borderRight">sobre</span>
          <span onClick={() => scrollToRef(projectRef)} className="menuItem borderRight">projetos</span>
          <span onClick={() => scrollToRef(contactRef)} className="menuItem">contato</span>
        </div>
        <div className="menuHamburguer" onClick={() => setShowMenuModal(true)}>
          <img src={menuHamburguer} alt="Menu Hamburguer"/>
        </div>
          {showMenuModal && (
            <>
              <div className="menuModal" onClick={() => setShowMenuModal(false)}>
                <span className="closedMenu">Fechar menu</span>
              </div>
            </>)}
      </nav>
      <div className="mainAbout">
          <p className="mainAboutTitle">
            Sejam<br/>bem-vindos (as)_
          </p>
          <p className="mainAboutSubtitle">
            Olá caros, me chamo Lucas Santos Pereira e sou Designer UI/UX & Fotógrafo.<br /><br />
            E este é o meu portfólio!
          </p>
      </div>
      <div className="imageContainer">
        <img className="imgBanner" src={Lucas} alt="Lucas"/>
      </div>
    </section>

    <section ref={aboutRef} className="aboutSection">
      <p className="sectionTitle">Sobre_</p>
      <div className="aboutContainer">
        <p className="aboutText">
        Atualmente, estou concluindo meu bacharel em Design pela Universidade São Judas Tadeu e trabalhando para o Itaú Unibanco como Designer de Produto e Customer Experience.
        <br /><br />
        Hoje, atuando nas plataformas digitais do banco, criando e melhorando as diversas funcionalidades, sempre buscando por melhorias a partir de métodos do design estratégico. 
        <br /><br />
        Fazendo o uso de ferramentas para a confecção de layouts e prototipação de interfaces, possuo conhecimento avançado nos programas essenciais para a execução das atividades da minha área.
        </p>
        <img className="aboutPerfil" src={Perfil} alt="Lucas Perfil"/>
      </div>
      <div className="download">
        <div className="downloadIcon">
          <p className="downloadText">baixar currículo</p>
        </div>
      </div>
    </section>

    <section ref={projectRef} className="projectsSection">
      <p className="sectionTitle">Projetos_</p>
      <div className="projectsContainer">
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={Itau} alt="Itau"/>
          </a>
        </div>
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={Saraiva} alt="Saraiva"/>
          </a>
        </div>
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={Flex} alt="Flex Company Facilities"/>
          </a>
        </div>
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={Lions} alt="Lions Investment"/>
          </a>
        </div>
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={T4f} alt="Time for fun"/>
          </a>
        </div>
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={Pinacoteca} alt="Pinacoteca"/>
          </a>
        </div>
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={Loading} alt="Carregando"/>
          </a>
        </div>
        <div className="projectCard">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img className="imgCard" src={Loading} alt="Carregando"/>
          </a>
        </div>
      </div>
    </section>

    <section ref={contactRef} className="contactSection">
      <p className="sectionTitle">Contato_</p>
      <div className="contactContainer">
        <div className="contactForm">
          <form className="form" type="submit">
            <input className="inputs" type="text" placeholder="Nome"></input>
            <input className="inputs" type="text" placeholder="E-mail"></input>
            <input className="inputs" type="text" placeholder="Assunto"></input>
            <textarea className="textArea" type="text" placeholder="Mensagem"></textarea>
            <button className="send" type="submit" onClick={(e) => e.preventDefault()}>Enviar</button>
          </form>
        </div>
        <div className="logoContainer">
          <img className="contactLogo" src={BlackLogo} alt="Logo"/>
          <p className="contactInfos">2021 Copyright &#169;</p>
          <p className="contactInfos">Todos os direitos reservados</p>
        </div>
      </div>
      <div className="contactIcons">
        <img style={{marginRight: "17px"}} src={Linkedin} alt="Linkedin"/>
        <img style={{marginRight: "17px"}} src={Behace} alt="Behace"/>
        <img style={{marginRight: "17px"}} src={Facebook} alt="Facebook"/>
        <img src={Instagram} alt="Instagram"/>
      </div>
    </section>
  </>)
}