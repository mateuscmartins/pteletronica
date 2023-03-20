import React from "react";

import './styles.css';

export default function Logon(){
    return(
        <div className="logon-container">
            
            <section className="form">
                <div>ADICIONAR LOGO</div>

                <form>
                    <h1>Insira seus dados</h1>
                    <input placeholder="Matricula"/>
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                </form>
            </section>

        </div>
    );
}