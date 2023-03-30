import React from 'react';

import './styles.css';

export default function NovaPT() {
    return (
        <div className='container'>
                <header>
                <div>LOGO</div>
                <div className='links'>

                    <a href='/'>
                        Logout
                    </a>

                </div>
            </header>

            <h1>
               Criar nova Permissão de Trabalho
            </h1>

            <form>

                <h2>Ordem de Serviço</h2>
                <fieldset className='content'>
                        
                        <section className='conteudo-esquerda'>
                            <label className='legenda'>Número da Ordem de Serviço</label>
                            <input type="text" placeholder='Nº da Ordem de Serviço' required></input>

                            <div className='secao-dividida'>
                                <div id='data-inicio'>
                                    <label className='legenda'>Data de início</label>
                                    <input type="date" required></input>
                                </div>
                                <div id='data-termino'>
                                    <label className='legenda'>Data de término previsto</label>
                                    <input type="date" required></input>
                                </div>
                            </div>
                                

                            <label className='legenda'>Local do trabalho</label>
                            <input type="text" placeholder='Ex: Portaria principal' required></input>
                            

                            <div className='secao-dividida'>
                                <div id='area-restrita'>
                                    <label className='legenda'>Área restrita</label>
                                    <div className='area-restrita-opcoes'>
                                        <input type="radio"  value="area-restrita"/>
                                        <label for="area-restrita" > Sim </label>
                                        <input type="radio"  value="area-nao-restrita"/>
                                        <label for="area-nao-restrita" > Não </label>
                                    </div>
                                </div>
                                <div id='tipo-mo'> 
                                    <label className='legenda'>Tipo de mão-de-obra</label>
                                    <div className='mao-de-obra-opcoes'>
                                        <input type="checkbox" value="interno"/>
                                        <label for="interna" > Interna </label>
                                        <input type="checkbox" value="externo"/>
                                        <label for="externa" > Externa </label>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='conteudo-direita'>
                            <label className='legenda'>Descrição do serviço</label>
                            <input type="textarea"></input>
                        </section>
                </fieldset>
    
            </form>
            

        </div>
   )
}