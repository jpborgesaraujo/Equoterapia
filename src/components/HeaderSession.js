import React from 'react';

const HeaderSession = () => {
  return (
    <div className="border-b p-6">
      {/* Título da sessão */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Sessão 1 - <span className="text-red-500">Aberta</span>
        </h1>
      </div>

      {/* Informações do participante */}
      <div className="flex justify-between items-center">
        {/* Perfil e informações */}
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/64" // Substituir pelo link da imagem real
            alt="Perfil do praticante"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <div className="text-lg font-semibold text-green-600">Ana Silva Barbosa</div>
            <div className="text-gray-500">12 anos</div>
          </div>
        </div>

        {/* Botões e horário */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Finalizar Sessão
            </button>
            <button className="bg-gray-200 text-gray-600 p-3 rounded-full hover:bg-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 0a2 2 0 11-4 0m0 0a2 2 0 114 0" />
              </svg>
            </button>
          </div>
          <div className="text-sm mt-2 text-gray-700">
            <div>Horario da sessão: <span className="font-medium">14:30 – 15:30</span></div>
            <div>Data: <span className="font-medium">15/11/24</span></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mt-6 border-t pt-4 gap-8">
        <button className="text-green-500 font-medium border-b-2 border-green-500 pb-2">
          Detalhes da sessão
        </button>
        <button className="text-gray-500 hover:text-green-500 transition">
          Informações do Praticante
        </button>
        <button className="text-gray-500 hover:text-green-500 transition">
          Feedback da Sessão Anterior
        </button>
      </div>
    </div>
  );
};

export default HeaderSession;
