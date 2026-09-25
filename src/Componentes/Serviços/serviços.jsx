import { useNavigate } from "react-router-dom";
import { LuCalendarDays } from "react-icons/lu";

function Serviços({
  servicosSelecionados,
  setServicosSelecionados,
  data,
  setData,
  horario,
  setHorario,
}) {
  const navigate = useNavigate();

  const servicos = [
    {
      id: 1,
      nome: "Corte",
      valor: 30,
      tempo: 30,
    },
    {
      id: 2,
      nome: "Barba",
      valor: 20,
      tempo: 20,
    },
    {
      id: 3,
      nome: "Corte + Barba",
      valor: 45,
      tempo: 50,
    },
    {
      id: 4,
      nome: "Tintura",
      valor: 60,
      tempo: 60,
    },
    {
      id: 5,
      nome: "Sobrancelha",
      valor: 15,
      tempo: 15,
    },
  ];

  // Adiciona ou remove o serviço
  function selecionarServico(servico) {
    const jaSelecionado = servicosSelecionados.some(
      (item) => item.id === servico.id
    );

    if (jaSelecionado) {
      setServicosSelecionados(
        servicosSelecionados.filter(
          (item) => item.id !== servico.id
        )
      );
    } else {
      setServicosSelecionados([
        ...servicosSelecionados,
        servico,
      ]);
    }

    // Quando altera os serviços, limpa o horário escolhido
    setHorario("");
  }

  // Soma o valor dos serviços
  function calcularValorTotal() {
    return servicosSelecionados.reduce(
      (total, servico) => total + servico.valor,
      0
    );
  }

  // Soma o tempo dos serviços
  function calcularTempoTotal() {
    return servicosSelecionados.reduce(
      (total, servico) => total + servico.tempo,
      0
    );
  }

  function gerarHorarios() {
    const horarios = [];

    const inicio = 540; // 09:00
    const fim = 1080; // 18:00

    const tempoTotal = calcularTempoTotal();

    if (tempoTotal === 0) {
      return horarios;
    }

    for (
      let minutos = inicio;
      minutos <= fim - tempoTotal;
      minutos += 30
    ) {
      let horas = Math.floor(minutos / 60);
      let minutosRestantes = minutos % 60;

      if (horas < 10) {
        horas = "0" + horas;
      }

      if (minutosRestantes < 10) {
        minutosRestantes = "0" + minutosRestantes;
      }

      horarios.push(`${horas}:${minutosRestantes}`);
    }

    return horarios;
  }

  return (
    <section className="servicos-container">
      <h2>Escolha seus serviços</h2>

      <div className="servicos-lista">
        {servicos.map((servico) => {
          const selecionado = servicosSelecionados.some(
            (item) => item.id === servico.id
          );

          return (
            <div
              className={`servico-card ${
                selecionado ? "servico-ativo" : ""
              }`}
              key={servico.id}
            >
              <h3>{servico.nome}</h3>

              <p>R$ {servico.valor}</p>

              <p>{servico.tempo} minutos</p>

              <button
                onClick={() => selecionarServico(servico)}
              >
                {selecionado ? "Remover" : "Selecionar"}
              </button>
            </div>
          );
        })}
      </div>

      {/* RESUMO DOS SERVIÇOS */}

      {servicosSelecionados.length > 0 && (
        <div className="servico-selecionado">
          <h3>Serviços selecionados</h3>

          {servicosSelecionados.map((servico) => (
            <div key={servico.id}>
              <p>
                {servico.nome} — R$ {servico.valor}
              </p>
            </div>
          ))}

          <hr />

          <p>
            <strong>Valor total:</strong> R${" "}
            {calcularValorTotal()}
          </p>

          <p>
            <strong>Tempo total:</strong>{" "}
            {calcularTempoTotal()} minutos
          </p>

          {/* CAMPO DE DATA */}

          <div className="campo-data-container">
            <input
              className="campo-data"
              type="date"
              value={data || ""}
              onChange={(e) => {
                setData(e.target.value);
                setHorario("");
              }}
            />

            <LuCalendarDays className="icone-calendario" />
          </div>

          {/* HORÁRIOS */}

          {data && (
            <div>
              <p>Data selecionada: {data}</p>

              <h4>Horários disponíveis</h4>

              <div className="horarios-container">
                {gerarHorarios().map((hora) => (
                  <button
                    key={hora}
                    className={
                      hora === horario
                        ? "selecionado"
                        : "normal"
                    }
                    onClick={() => setHorario(hora)}
                  >
                    {hora}
                  </button>
                ))}
              </div>

              {/* HORÁRIO ESCOLHIDO */}

              {horario && (
                <>
                  <p>
                    <strong>
                      Horário selecionado:
                    </strong>{" "}
                    {horario}
                  </p>

                  <button
                    className="btn-continuar"
                    onClick={() => {
                      navigate("/confirmacao");
                    }}
                  >
                    Continuar
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Serviços;