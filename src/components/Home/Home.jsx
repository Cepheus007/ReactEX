import Catalog from "../Catalog/Catalog";
import style from "./Home.module.css";
import crane from "../../assets/img/cvetok.png"
import { NavLink } from "react-router-dom";

const Home = () => {


    return (
        <>
            <div className="container">
                <div className={style.intro}>
                    <div className={style.intro_left}>
                        <h1 className={style.intro_title}>Flowers Store</h1>
                        <p className={style.intro_text}>
                        Покупай цветы только у нас по самым выгодным ценам!
                        </p>
                        <NavLink className={style.intro_btn} to={"/"}>
                            Подробнее!
                        </NavLink>
                    </div>
                    <img src={crane} alt="" className="intro_right" />
                </div>
                <Catalog/>
            </div>
        </>
    )
}

export default Home