import { LuScissors, LuSparkles, LuHeart } from "react-icons/lu";

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">

        <div className="sobre-content">
          <span className="sobre-subtitulo">
            SOBRE A BARBERPRO
          </span>

          <h2>
            Mais do que um corte,
            <span> uma experiência.</span>
          </h2>

          <p>
            Na BarberPro, acreditamos que cuidar do visual também é
            cuidar de si mesmo. Nosso objetivo é oferecer um atendimento
            de qualidade, em um ambiente confortável e moderno.
          </p>

          <p>
            Contamos com profissionais preparados para oferecer cortes,
            barba e outros serviços, sempre buscando entender o estilo
            e a preferência de cada cliente.
          </p>

          <div className="sobre-diferenciais">

            <div className="sobre-item">
              <LuScissors />
              <div>
                <h3>Profissionais especializados</h3>
                <p>
                  Experiência e atenção em cada atendimento.
                </p>
              </div>
            </div>

            <div className="sobre-item">
              <LuSparkles />
              <div>
                <h3>Qualidade em cada detalhe</h3>
                <p>
                  Cuidado desde o atendimento até o resultado final.
                </p>
              </div>
            </div>

            <div className="sobre-item">
              <LuHeart />
              <div>
                <h3>Você em primeiro lugar</h3>
                <p>
                  Uma experiência pensada para deixar você satisfeito.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;