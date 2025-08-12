import React from "react";
import "./banner.css";

function Banner({ title, description }) {
  return (
    <div className="banner">
      <section className="title-desctiption ">
        <h1 className="long-text">Demon Slayer: Kimetsu no Yaiba — Infinity Castle</h1>
        <h1 className="short-text" style={{display: "none"}}>Demon Slayer</h1>
      </section>
      <div className="banner_buttons">
        <button className="banner_button play">Play</button>
        <button className="banner_button ">My List</button>
      </div>
      <p className="discription-text">
        As the Demon Slayer Corps members and Hashira engaged in a group
        strength training program, the Hashira Training, in preparation for the
        forthcoming ...
      </p>
      <div className="buttom-shadow"></div>
    </div>
  );
}

export default Banner;
