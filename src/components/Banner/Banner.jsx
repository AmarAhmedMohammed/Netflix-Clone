import React from "react";
import "./banner.css"

function Banner({title, description}) {
  return (
    <div className="banner">
      <section className="title-desctiption">
        <h1>Demon Slayer: Kimetsu no Yaiba — Infinity Castle</h1>
        <p>As the Demon Slayer Corps members and Hashira engaged in a group strength training program, the Hashira Training, in preparation for the forthcoming ...</p>
      </section>
      <div className="buttom-shadow"></div>
    </div>
  );
}

export default Banner;
