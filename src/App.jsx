import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Componentes/Header/header";
import Section from "./Componentes/Section/section";
import Footer from "./Componentes/Footer/footer";
import Serviços from "./Componentes/Serviços/serviços";
import Confirmacao from "./Componentes/Confirmação/confirm";

import "./App.css";
import "./Componentes/Header/header.css";
import "./Componentes/Section/section.css";
import "./Componentes/Footer/footer.css";
import "./Componentes/Serviços/serviços.css";
import "./Componentes/Confirmação/confirm.css";

function App() {
  const [servicosSelecionados, setServicosSelecionados] = useState([]);

  const [data, setData] = useState("");

  const [horario, setHorario] = useState("");

  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <Section />
            <Footer />
          </div>
        }
      />

      {/* SERVIÇOS */}
      <Route
        path="/servicos"
        element={
          <div className="App">
            <Header />

            <Serviços
              servicosSelecionados={servicosSelecionados}
              setServicosSelecionados={setServicosSelecionados}
              data={data}
              setData={setData}
              horario={horario}
              setHorario={setHorario}
            />
          </div>
        }
      />

      {/* CONFIRMAÇÃO */}
      <Route
        path="/confirmacao"
        element={
          <div className="App">
            <Header />

            <Confirmacao
              servicosSelecionados={servicosSelecionados}
              data={data}
              horario={horario}
              setServicosSelecionados={setServicosSelecionados}
              setData={setData}
              setHorario={setHorario}
            />
          </div>
        }
      />

    </Routes>
  );
}

export default App;