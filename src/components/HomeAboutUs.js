import React from "react";
import Decoration from "../assets/icons/Decoration.svg";
import Signature from "../assets/icons/Signature.svg";

function AboutUs() {
  return (
    <section className="about_us">
      <div className="about_us_article">
        <header>O nas</header>
        <img alt="decoration" src={Decoration} id="decoration"></img>
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img alt="signature" src={Signature} id="signature"></img>
      </div>
      <div className="people_picture" id="people"></div>
    </section>
  );
}

export default AboutUs;
