import React from 'react';

const FinishSession = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 min-h-screen p-4">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <img src="/api/placeholder/48/48" alt="Profile" className="w-12 h-12 rounded-full" />
            <div>
              <div className="text-green-500">Bem vindo!</div>
              <div className="text-green-500">Pedro Fran</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <button className="w-full text-left p-3 rounded hover:bg-gray-100 transition flex items-center justify-between">
            <span>Acessar agenda</span>
            <span>→</span>
          </button>
          <button className="w-full text-left p-3 rounded bg-green-500 text-white flex items-center justify-between">
            <span>Próximas sessões</span>
            <span>→</span>
          </button>
          <button className="w-full text-left p-3 rounded hover:bg-gray-100 transition flex items-center justify-between">
            <span>Listar Praticantes</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="border-b p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl">Sessão 1 - Finalizar sessão</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img src="/api/placeholder/48/48" alt="Therapist" className="w-12 h-12 rounded-full" />
                <div>
                  <div>Ana Silva Barroso</div>
                  <div className="text-sm text-gray-500">25 anos</div>
                </div>
              </div>
              <div className="text-sm">
                <div>Horario da sessão: 14:30 - 15:30</div>
                <div>Data: 15/11/24</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Nova evolução */}
          <div className="mb-8">
            <h2 className="text-green-500 text-lg mb-6">Nova evolução</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block mb-2 text-sm">Mediador(es):</label>
                <input 
                  type="text" 
                  placeholder="Digite o nome do Mediador" 
                  className="w-full p-2 border rounded hover:border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Condutor:</label>
                <input 
                  type="text" 
                  placeholder="Digite o nome do Condutor" 
                  className="w-full p-2 border rounded hover:border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Cavalo:</label>
                <select className="w-full p-2 border rounded hover:border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                  <option value="">Selecione o animal utilizado</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm">Encilhamento:</label>
              <select className="w-full p-2 border rounded hover:border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                <option value="">Selecione o Encilhamento utilizado</option>
              </select>
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-8">
            <h2 className="text-green-500 text-lg mb-6">Feedback</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Observações gerais</label>
                <textarea 
                  rows={4}
                  placeholder="Observações gerais..."
                  className="w-full p-2 border rounded hover:border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none resize-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Observações para a Próxima Sessão</label>
                <textarea 
                  rows={4}
                  placeholder="Observações..."
                  className="w-full p-2 border rounded hover:border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 rounded text-gray-700 border hover:bg-gray-50">
              Cancelar
            </button>
            <button className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600">
              Salvar e finalizar sessão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishSession;