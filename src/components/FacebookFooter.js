import React from "react";
import Facebook from "../assets/icons/Facebook.svg";

function FacebookFooter() {
  return (
    <div className="social_media_footer">
      <a href="https://google.com">
        {" "}
        <img id="facebook" src={Facebook}></img>
      </a>
    </div>
  );
}

export default FacebookFooter;
