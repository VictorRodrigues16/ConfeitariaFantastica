import {} from "react";
import "../styles/Forms.scss";

export default function Forms(){
    return(
        <>
        <div className="forms-container">
            <div id="tittle-forms">
                <h1>Entre em contato</h1>
            </div>
            <div id="form">
            <form class="colorful-form">
                <div class="form-group">
                    <label class="form-label" for="name">Nome</label>
                        <input required="" placeholder="Insira seu Nome" class="form-input" type="text"/>
                </div>
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                        <input required="" placeholder="Insira o seu melhor E-mail" class="form-input" name="email" id="email" type="email"/>
                </div>
                <div class="form-group">
                    <label class="form-label" for="message">Mensagem</label>
                    <textarea required="" placeholder="Insira sua mensagem" class="form-input" name="message" id="message"></textarea>
                </div>
                    <button class="form-button" type="submit">Enviar</button>
                </form>

            </div>
        </div>
        </>
    );
    
}