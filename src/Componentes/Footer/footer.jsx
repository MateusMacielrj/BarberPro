import { LuUserRoundCheck, LuSnowflake, LuStar } from "react-icons/lu";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <LuUserRoundCheck />
          <span>Profissionais experientes</span>
        </li>

        <li>
          <LuSnowflake />
          <span>Ambiente climatizado</span>
        </li>

        <li>
          <LuStar />
          <span>Atendimento de qualidade</span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;