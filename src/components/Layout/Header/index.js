import "./styles.scss";
import Filter from "../../Filter";
import gitHubIcon from "../../../assets/images/github.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src={gitHubIcon} alt="" width="60" />
        <h1>Lista de repositórios</h1>
        <a
          href="https://github.com/leosena777"
          target="_blank"
          className="git-link"
          rel="noreferrer"
        >
          https://github.com/leosena777
        </a>
        <Filter />
      </div>
    </header>
  );
}
