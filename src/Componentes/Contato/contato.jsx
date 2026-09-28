import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuInstagram,
  LuMessageCircle,
} from "react-icons/lu";

function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="contato-container">

        <div className="contato-header">
          <span>FALE CONOSCO</span>

          <h2>
            Entre em <strong>contato</strong>
          </h2>

          <p>
            Ficou com alguma dúvida? Entre em contato com a BarberPro.
            Estamos prontos para atender você.
          </p>
        </div>

        <div className="contato-content">

          <div className="contato-informacoes">

            <div className="contato-item">
              <div className="contato-icon">
                <LuMapPin />
              </div>

              <div>
                <h3>Endereço</h3>
                <p>Rua da Barbearia, 123</p>
                <p>Rio de Janeiro - RJ</p>
              </div>
            </div>

            <div className="contato-item">
              <div className="contato-icon">
                <LuPhone />
              </div>

              <div>
                <h3>Telefone</h3>
                <p>(21) 99999-9999</p>
              </div>
            </div>

            <div className="contato-item">
              <div className="contato-icon">
                <LuMail />
              </div>

              <div>
                <h3>E-mail</h3>
                <p>contato@barberpro.com</p>
              </div>
            </div>

            <div className="contato-item">
              <div className="contato-icon">
                <LuClock />
              </div>

              <div>
                <h3>Horário de atendimento</h3>
                <p>Segunda a sábado</p>
                <p>09:00 às 19:00</p>
              </div>
            </div>

          </div>

          <div className="contato-acoes">

            <h3>Vamos conversar?</h3>

            <p>
              Agende seu horário ou fale diretamente com nossa equipe.
            </p>

            <div className="contato-botoes">

              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-whatsapp"
              >
                <LuMessageCircle />
                Falar pelo WhatsApp
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-instagram"
              >
                <LuInstagram />
                Instagram
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contato;