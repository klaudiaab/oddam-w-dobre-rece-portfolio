import React from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/icons/Decoration.svg";
import Icon1 from "../assets/icons/Icon-1.svg";
import Icon2 from "../assets/icons/Icon-2.svg";
import Icon3 from "../assets/icons/Icon-3.svg";
import Icon4 from "../assets/icons/Icon-4.svg";

function HomeFourSteps() {
  return (
    <section className="four_steps" id="four_steps">
      <header>Wystarczą 4 proste kroki</header>
      <img src={Decoration} alt="text decoration" id="text_decoration" />
      <div className="steps_details">
        <div className="column">
          <img src={Icon1} alt="t-shirt icon" id="t-shirt" />
          <h3>Wybierz rzeczy</h3>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="column">
          <img src={Icon2} alt="t-shirt bag" id="bag" />
          <h3>Spakuj je</h3>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="column">
          <img src={Icon3} alt="loupe icon" id="loupe" />
          <h3>Zdecyduj komu chcesz pomóc</h3>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="column">
          <img src={Icon4} alt="circle icon" id="circle" />
          <h3>Zamów kuriera</h3>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <Link to="/logowanie" className="hand_over_things">
        Oddaj <br></br>rzeczy
      </Link>
    </section>
  );
}

export default HomeFourSteps;
