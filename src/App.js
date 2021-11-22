import { Contato } from "./components/Contato";
import Header from "./components/Header";
import { SectionProjetos } from "./components/SectionProjetos";
import { SectionTecnologias } from "./components/SectionTecnologias";
import { SectionTop } from "./components/SectionTop";
import { Footer } from "./components/Footer";
//import { HashRouter } from "react-router-dom";
//import Routes from "./Routes"

function App() {
  return (
    <>
      <Header />
      <SectionTop />
      <SectionTecnologias />
      <SectionProjetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
