import {} from "react";
import "../styles/Candys.scss";
import cat from "../assets/cat.png"
import dino from "../assets/dino.png"
import winx from "../assets/winx.png"
import dino2 from "../assets/dino2.png"

export default function  Candys() {
    return (
        <div className="candy-container">
            <div id="box">
                <div id="tittle-candy">
                    <h1>Conheça nossos doces!</h1>
                    <div id="subcont-candy">
                        <span className="candy-type">Massas:<p id="candy-option">Chocolate, Baunilha, Morango</p></span>
                        <span className="candy-type">Recheios:<p id="candy-option">Chocolate, Baunilha, Morango</p></span>
                        <span className="candy-type">Coberturas:<p id="candy-option">Chocolate, Baunilha, Morango</p></span>
                    </div>
                </div>

                <div id="tittle2-candy">
                    <h1>Escolha o tema!</h1>
                    <div id="candy-photos">
                        <div className="photo">
                            <img src={cat} alt="cat" />
                            <p>Cat CupCake </p>
                        </div>
                        <div className="photo">
                            <img src={dino} alt="dino" />
                            <p>Dino CupCake  </p>
                        </div>
                        <div className="photo">
                            <img src={winx} alt="winx" />
                            <p>Fairy CupCake </p>
                        </div>
                        <div className="photo">
                            <img src={dino2} alt="dino2" />
                            <p>Angry Dino <br />CupCake  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}