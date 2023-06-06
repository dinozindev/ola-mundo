import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

console.log(window.location)


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      
      <Rodape />

    </BrowserRouter>
  )
}

export default AppRoutes;

      /*      
        Na rota '/', a estrutura a ser renderizada é:

        <PaginaPadrao> 
          <Inicio />
        </PaginaPadrao>

        Na rota '/sobre-mim', a estrutura a ser renderizada é:

        <PaginaPadrao> 
          <SobreMim />
        </PaginaPadrao>
        */