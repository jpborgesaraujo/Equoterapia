import React, { useState } from "react";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./SidebarAdm.css";

const SidebarAdm = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isSidebarAdmOpen, setIsSidebarAdmOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "agenda") {
      navigate("/");
    }
  };

  const toggleSidebarAdm = () => {
    setIsSidebarAdmOpen(!isSidebarAdmOpen);
  };

  return (
    <>
      <button className="SidebarAdm-toggle" onClick={toggleSidebarAdm}>
        <FaBars />
      </button>

      <div className={`SidebarAdm p-3 ${isSidebarAdmOpen ? "open" : ""}`}>
        <Link to="/login" className="btn exit-button d-flex align-items-center">
          <RxExit className="exit-icon me-1 icon-large" />
          <span>Sair</span>
        </Link>

        <div className="profile-pic my-4">
          <img
            src="https://img.freepik.com/fotos-premium/icone-plano-isolado-no-fundo_1258715-220844.jpg?semt=ais_hybrid"
            alt="User Profile"
            className="rounded-circle"
          />
        </div>

        <h5 className="text-center mb-2 fw-bold">Bem Vindo!</h5>
        <h6 className="username mb-5 fw-bold">Nome do Usuário</h6>

        <button
          className={`btn SidebarAdm-button mb-4 fw-bold ${
            activeButton === "agenda" ? "active-button" : "btn-light"
          }`}
          onClick={() => handleButtonClick("agenda")}
        >
          Acessar Agenda <span className="arrow">&gt;</span>
        </button>
        
        <button
          className={`btn SidebarAdm-button mb-4 fw-bold ${
            activeButton === "equinos" ? "active-button" : "btn-light"
          }`}
          onClick={() => handleButtonClick("equinos")}
        >
          Listar Equinos <span className="arrow">&gt;</span>
        </button>
      </div>
    </>
  );
};

export default SidebarAdm;
