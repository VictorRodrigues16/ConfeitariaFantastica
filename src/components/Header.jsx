import {} from "react";
import "../styles/Header.scss";
import Logo from "../assets/logo.png"


export default function Header() {
  return (
    <>
      <section className="nav-bar">
        <img src={Logo} alt="Logo" />

        <ul>
          <li>Home</li>
          <li>História</li>
          <li>Conheça nossos doces</li>
          <li>Preços</li>
          <li>
          <button>PEÇA AGORA</button>
          </li>
        </ul>
      </section>
    </>
  );
}
