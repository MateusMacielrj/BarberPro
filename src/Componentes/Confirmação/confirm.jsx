import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuCheck } from "react-icons/lu";

function Confirmacao({
  servicosSelecionados,
  data,
  horario,
  setServicosSelecionados,
  setData,
  setHorario,
}) {
  const navigate = useNavigate();

  const [agendamentoConfirmado, setAgendamentoConfirmado] =
    useState(false);

  const valorTotal = servicosSelecionados.reduce(
    (total, servico) => total + servico.valor,
    0
  );

  const tempoTotal = servicosSelecionados.reduce(
    (total, servico) => total + servico.tempo,
    0
  );

  function voltarParaServicos() {
    navigate("/servicos");
  }

  function confirmarAgendamento() {
    setAgendamentoConfirmado(true);
  }

  function novoAgendamento() {
    setServicosSelecionados([]);
    setData("");
    setHorario("");

    navigate("/servicos");
  }

  if (agendamentoConfirmado) {
    return (
      <section className="confirmacao-container">
        <div className="confirmacao-sucesso">
          <div className="icone-sucesso">
            <LuCheck />
          </div>

          <h2>Agendamento confirmado!</h2>

          <p className="mensagem-sucesso">
            Seu horário foi reservado com sucesso.
          </p>

          <div className="resumo-final">
            <h3>Resumo do agendamento</h3>

            <div className="resumo-item">
              <span>Data</span>
              <strong>{data}</strong>
            </div>

            <div className="resumo-item">
              <span>Horário</span>
              <strong>{horario}</strong>
            </div>

            <div className="resumo-item">
              <span>Serviços</span>
              <strong>{servicosSelecionados.length}</strong>
            </div>

            <div className="resumo-item">
              <span>Total</span>
              <strong>R$ {valorTotal}</strong>
            </div>
          </div>

          <button
            className="btn-novo-agendamento"
            onClick={novoAgendamento}
          >
            Fazer novo agendamento
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="confirmacao-container">
      <h2>Confirme seu agendamento</h2>

      <div className="confirmacao-servicos">
        <h3>Serviços escolhidos</h3>

        {servicosSelecionados.length > 0 ? (
          servicosSelecionados.map((servico) => (
            <div
              className="confirmacao-servico"
              key={servico.id}
            >
              <div>
                <h4>{servico.nome}</h4>

                <p>
                  Duração: {servico.tempo} minutos
                </p>
              </div>

              <strong>
                R$ {servico.valor}
              </strong>
            </div>
          ))
        ) : (
          <p>Nenhum serviço selecionado.</p>
        )}
      </div>

      <div className="confirmacao-resumo">
        <h3>Resumo do agendamento</h3>

        <p>
          <span>Valor total</span>
          <strong>R$ {valorTotal}</strong>
        </p>

        <p>
          <span>Tempo total</span>
          <strong>{tempoTotal} minutos</strong>
        </p>

        <p>
          <span>Data</span>
          <strong>{data || "Não selecionada"}</strong>
        </p>

        <p>
          <span>Horário</span>
          <strong>{horario || "Não selecionado"}</strong>
        </p>
      </div>

      <div className="confirmacao-botoes">
        <button
          className="btn-voltar"
          onClick={voltarParaServicos}
        >
          Voltar
        </button>

        <button
          className="btn-confirmar"
          onClick={confirmarAgendamento}
          disabled={
            servicosSelecionados.length === 0 ||
            !data ||
            !horario
          }
        >
          Confirmar agendamento
        </button>
      </div>
    </section>
  );
}

export default Confirmacao;