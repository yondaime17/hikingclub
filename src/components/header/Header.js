import "./Header.css";
import logo from "../../media/img/hiking-logo.png";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Menu from "../menu/Menu";

export default function Header({ setPage, page }) {
  return (
    <header>
      <button onClick={() => setPage("home")} className="logo">
        <img src={logo} alt="Adjara Hiking Club logo" />
      </button>
      <div className="menu">
        <Menu page={page} setPage={setPage} />
      </div>
      <div className="burger_menu">
        <BurgerMenu page={page} setPage={setPage} />
      </div>
    </header>
  );
}
