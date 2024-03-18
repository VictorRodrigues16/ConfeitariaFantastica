import {} from "react";
import "../styles/Footer.scss";
import Logo from "../assets/logo.png"

export default function Footer (){
  return (
    <div className="footer">
        <img id="logo" src={Logo} alt="Logo-Footer" />
        <div id="info-footer">
            <div id="tittle-info-footer">
                <h1>Para mais informações:</h1>
                <p>(11) 96635-2465</p>
            </div>
            <h2>Design by Joraysuke</h2>
        </div>
        <h2 id="tittle2-footer">Transforme seu dia com uma dose de felicidade!</h2>
    </div>

  )
  }
