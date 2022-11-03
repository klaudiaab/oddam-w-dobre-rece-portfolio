import React, { useState } from "react";
import Decoration from "../assets/icons/Decoration.svg";

function HomeHelping() {
  const [text, setText] = useState(
    "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
  );

  const chooseFoundations = (e) => {
    e.preventDefault();
    setText(
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
    );
  };
  const nonGovernmentalOrganizations = (e) => {
    e.preventDefault();
    setText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    );
  };
  const localCollection = (e) => {
    e.preventDefault();
    setText(
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sit."
    );
  };
  return (
    <section className="home_helping">
      <header className="header_helping">Komu pomagamy?</header>
      <img alt="decoration" src={Decoration} />
      <div className="helping_organizations">
        <div
          className="foundations"
          id="organizations"
          onClick={chooseFoundations}
        >
          Fundacjom
        </div>
        <div
          className="non-governmental_organizations"
          id="organizations"
          onClick={nonGovernmentalOrganizations}
        >
          Organizacjom pozarządowym
        </div>
        <div
          className="local_collection"
          id="organizations"
          onClick={localCollection}
        >
          Lokalnym zbiórkom
        </div>
      </div>
      <p className="type_of_organization">{text}</p>
    </section>
  );
}

export default HomeHelping;
