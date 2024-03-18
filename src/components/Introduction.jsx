import {} from "react";
import "../styles/Introduction.scss";
import Cupcake from "../assets/cupcake-with-fairy.png";

export default function Introduction() {
  return (
    <>
      <section className="introduction">
        <aside>
          <h2 className="main-text">
            CONHEÇA AGORA OS <span className="colored-text">MELHORES DOCES</span> DA SUA <span className="colored-text">VIDA</span>
          </h2>

          <h2 className="secondary-text">
            Doces mágicos e sabores fantásticos
          </h2>

          <button>PEÇA AGORA</button>
        </aside>

        <img src={Cupcake} alt="Cupcake with fairy on top" />
      </section>
    </>
  );
}
