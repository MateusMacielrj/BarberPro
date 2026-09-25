import { LuScissors } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <div className="logo">
          <LuScissors />
          <h3>BarberPro</h3>
        </div>

        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>

          <li>
            <Link to="/servicos">Serviços</Link>
          </li>

          <li>
            <a href="#sobre">Sobre</a>
          </li>

          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>

        <button onClick={() => navigate("/servicos")}>
          Agendar agora
        </button>
      </nav>
    </header>
  );
}

export default Header;