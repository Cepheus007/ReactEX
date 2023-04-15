import { NavLink } from "react-router-dom";
import cart from "../../assets/img/Shopping.svg";
import style from "./Header.module.css";

const Header = ({ setActive }) => {
  return (
    <header>
      <NavLink to={"/"}>
        <div className={style.logotype}>FLOWERSSTORE</div>
      </NavLink>
      <nav className={style.nav}>
        <NavLink className={style.navlink} to={"/"}>
          Важное
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Новое
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Уникальное!
        </NavLink>
      </nav>
      <div className={style.btns_header}>
        <div className={style.icon} onClick={() => setActive(true)}>
          <img className={style.cart_icon} src={cart} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
