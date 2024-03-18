import {} from "react";
import "../styles/OurHistory.scss";
import Women from "../assets/women-with-cupcake.png";

export default function OurHistory() {
  return (
    <>
      <section className="container">
        <h1>Nossa História</h1>

        <div className="our-history">
          <img src={Women} alt="Women with cupcake" />

          <h2>
            Fantastic é uma confeitaria especial conhecida por seus doces
            mágicos e atmosfera encantadora. Fundada por Isadora, tornou-se um
            ponto de referência na cidade, trazendo alegria e encantamento aos
            clientes. Apesar dos desafios, Fantastic continua adoçando a vida
            das pessoas, mantendo viva sua magia única.
          </h2>
        </div>
      </section>
    </>
  );
}
