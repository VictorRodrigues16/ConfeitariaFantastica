import {} from "react";
import "../styles/Values.scss";
import cupcake from "../assets/cupcake-pink.jpeg";
export default function Values () {
    return (
        <div className="values-container">
                <img src={cupcake} alt="" />
            <div id="info-container">
                <div id="tittle-value">
                    <h1>Valores</h1>
                    <div id="boxes">
                        <div id="box1" className="boxs">
                            <h2>CupCake</h2>
                            <p>Pequeno (50g)</p>
                            <span>R$8,00</span>
                        </div>
                        <div id="box2" className="boxs">
                            <h2>CupCake</h2>
                            <p>Médio (100g)</p>
                            <span>R$13,00</span>
                        </div>
                        <div id="box3" className="boxs">
                            <h2>CupCake</h2>
                            <p>Grande (150g)</p>
                            <span>R$16,00</span>
                        </div>
                    </div>
                </div>

                <div id="subtittle-value">
                    <h1>Entre em contato conosco e conheça os melhores doces!</h1>
                    <div id="button">
                        <button>PEÇA AGORA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
