import React from "react";
import Decoration from "../assets/icons/Decoration.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";

function HomeFooter() {
  return (
    <section className="footer">
      <div className="contact_footer">
        <header className="header_footer">Skontaktuj się z nami!</header>
        <img alt="decoration" src={Decoration}></img>
        <form className="form">
          <div className="contact_details">
            <div className="contact_form">
              <label id="label_style">Wpisz swoje imię</label>
              <input type="text" id="name" placeholder="Krzysztof"></input>
            </div>
            <div className="contact_form">
              {" "}
              <label id="label_style">Wpisz swój email</label>
              <input type="text" id="email" placeholder="abc@xyz.pl"></input>
            </div>
          </div>
          <div className="contact_form">
            {" "}
            <label id="label_style">Wpisz swoją wiadomość</label>
            <textarea
              id="message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></textarea>
          </div>
          <div className="button">
            <button type="submit" className="btn">
              Wyślij
            </button>
          </div>
          <div className="social_media_footer">
            <a href="https://www.facebook.com/">
              <img alt="decoration" id="facebook" src={Facebook}></img>
            </a>
            <a href="https://www.instagram.com/">
              <img alt="decoration" id="instagram" src={Instagram}></img>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomeFooter;
