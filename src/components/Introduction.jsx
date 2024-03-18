import {} from "react";
import "../styles/Introduction.scss";
import Cupcake from "../assets/cupcake-with-fairy.png";

export default function Introduction() {
  return (
    <>
      <section className="introduction">
        <aside>
          <div className="main-text">
            CONHEÇA AGORA OS <span className="colored-text">MELHORES DOCES</span> DA SUA <span className="colored-text">VIDA</span>
          </div>

          <div className="secondary-text">
            Doces mágicos e sabores fantásticos
          </div>

          <button>PEÇA AGORA</button>
        </aside>

        <img src={Cupcake} alt="Cupcake with fairy on top" />
      </section>
    </>
  );
}
