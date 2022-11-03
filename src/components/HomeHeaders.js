import React from "react";
import Decoration from "../assets/icons/Decoration.svg";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

function HomeHeaders() {
  return (
    <div className="home_header">
      <section className="header_menu">
        <header className="menu_navigation">
          <nav>
            <ul className="header_login_register container">
              <li>
                <Link1 to="/logowanie">Zaloguj</Link1>
              </li>
              <li>
                <Link1 to="/rejestracja">Załóż konto</Link1>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="menu container">
              <li>
                <Link to="article_section" spy={true} smooth={true}>
                  Start
                </Link>
              </li>
              <li>
                <Link to="four_steps" spy={true} smooth={true}>
                  O co chodzi?
                </Link>
              </li>
              <li>
                <Link to="about_us" spy={true} smooth={true}>
                  O nas
                </Link>
              </li>
              <li>
                <Link to="home_helping" spy={true} smooth={true}>
                  Fundacje i organizacje
                </Link>
              </li>
              <li>
                <Link to="header_footer" spy={true} smooth={true}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
      <section className="article_section">
        <div className="household_things" id="household_things"></div>
        <article className="article container">
          <h1>
            Zacznij pomagać! <br></br>
            <br></br>
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <img src={Decoration} alt="text decoration" id="text_decoration" />
          <ul className="register_and_login">
            <li>
              <Link1 to="/logowanie" className="hand_over_things">
                Oddaj rzeczy
              </Link1>
            </li>
            <li>
              <Link1
                to="/logowanie"
                className="organize_fundraiser"
                id="organize_fundraiser"
              >
                Zorganizuj zbiórkę
              </Link1>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default HomeHeaders;
