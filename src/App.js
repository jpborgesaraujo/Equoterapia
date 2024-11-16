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
import TelaSessao from './components/SessaoIndividual.js';

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
              path="/SessaoIndividual"
              element={
                <div className="app-content">
                  <Sidebar />
                  <TelaSessao />
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
