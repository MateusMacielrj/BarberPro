import cadeira from "../../assets/cadeira.png";
import { Link } from "react-router-dom";

function Section() {
  return (
    <section>
      <div className="hero-content">
        <h1>
          Seu estilo, <br /> nosso cuidado
        </h1>

        <p>
          Cortes modernos, barba alinhada e uma experiência <br />
          feita para você. Agende seu horário de forma rápida <br />
          e prática.
        </p>

        <div className="hero-buttons">
          <Link to="/servicos">Agendar agora</Link>

          <Link to="/servicos">Ver serviços</Link>
        </div>
      </div>

      <div className="hero-image">
        <img src={cadeira} alt="Cadeira de barbeiro" />
      </div>
    </section>
  );
}

export default Section;