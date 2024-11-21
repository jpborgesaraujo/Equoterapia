import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Agenda from "./components/Agenda.js";
import NewAgenda from "./components/newAgenda.js";
import Login from "./components/Login";
import EsqueceuSenha from "./components/EsqueceuSenha";
import CodigoVerificacao from "./components/Codigo";
import NovaSenha from "./components/NovaSenha";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarEquitador from "./components/equitador/SidebarEquitador.js";
import ListarEquino from "./components/equitador/ListarEquino.js";
import FeedbackSessaoAnterior from "./components/FeedbackSessaoAnterior.js";
import CabecalhoSessao from "./components/CabecalhoSessao.js";
import DetalhesSessao from "./components/detalhes-sessao.js"
import ImformacoesPraticante from "./components/InformacoesPraticante.js";
import SidebarAdm from "./components/SidebarAdm.js";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Rotas sem Sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="/codigo-verificacao" element={<CodigoVerificacao />} />
          <Route path="/nova-senha" element={<NovaSenha />} />
          
          {/* Rotas com Sidebar */}
          <Route
            path="/"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <Agenda />
                </div>
              </div>
            }
          />
          <Route
            path="/novo-agendamento"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <NewAgenda />
                </div>
              </div>
            }
          />

          <Route
            path="/feedback-sessao"
            element={
              <div className="app-content">
                <Sidebar />
                <div className="content">
                  <FeedbackSessaoAnterior />
                </div>
              </div>
            }
          />

            <Route
              path="/detalhes-sessao"
              element={
                <div className="app-content">
                  <Sidebar />

                  <div className="content">
                  <DetalhesSessao />
                  </div>
                  
                  
                </div>

              }
          />

            <Route
              path="/informacoes-praticante"
              element={
                <div className="app-content">
                  <Sidebar />
                  <div className="content">
                    <ImformacoesPraticante />
                  </div>
                </div>
              }
            />


            <Route
              path="/detalhes-sessao"
              element={
                <div className="app-content">
                  <Sidebar />
                  <CabecalhoSessao/>
                  
                </div>

              }
          />

            <Route
              path="/SidebarAdm"
              element={
                <div className="app-content">
                  <div className="content">
                  <SidebarAdm />
                  </div>
                  
                  
                  
                </div>

              }
          />


          <Route
            path="/equitador/"
            element={
              <div className="row">
                <div className="col-12 col-md-3">
                  <SidebarEquitador />
                </div>
              </div>
            }
          />
          <Route
            path="/equitador/listar-equino"
            element={
              <div className="row">
                <div className="col-12 col-md-3">
                  <SidebarEquitador />
                </div>
                <div className="col-12 col-md-9">
                  <ListarEquino />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
