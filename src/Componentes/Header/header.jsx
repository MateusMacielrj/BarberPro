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
            <Link to="/sobre">Sobre</Link>
          </li>

          <li>
            <Link to="/contato">Contato</Link>
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