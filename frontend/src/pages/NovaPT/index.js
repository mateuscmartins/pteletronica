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
                            <label className='legenda'>Descrição do serviço</label>
                            <textarea rows="5"/>
                            
                        </section>
                        <section className='conteudo-direita'>
                            
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
                </fieldset>


                <h2>Riscos envolvidos</h2>
                <fieldset className='content' id='riscos'>
                    <section className='conteudo-esquerda'>
                        <input type="checkbox" value="movimentacao-guincho-plataforma"/>
                        <label for="movimentacao-guincho-plataforma" > Movimentação com uso de guincho e plataforma </label><br></br>
                        <input type="checkbox" value="manutencao-civil"/>
                        <label for="manutencao-civil" > Manutenção civil </label><br></br>
                        <input type="checkbox" value="gases-explosivos"/>
                        <label for="gases-explosivos" > Gases, explosivos e/ou líquidos inflamáveis </label><br></br>
                        <input type="checkbox" value="altura"/>
                        <label for="altura" > Altura, telhados e/ou níveis elevados </label><br></br>
                        <input type="checkbox" value="demolicao-escavacao"/>
                        <label for="demolicao-escavacao" > Demolição e/ou Escavação </label><br></br>
                    </section> 
                    <section className='conteudo-direita'>
                        <input type="checkbox" value="eletricidade"/>
                        <label for="eletricidade" > Eletricidade </label><br></br>
                        <input type="checkbox" value="trabalho-a-quente"/>
                        <label for="trabalho-a-quente" > Trabalho à quente </label><br></br>
                        <input type="checkbox" value="local-confinado"/>
                        <label for="local-confinado" > Local confinado </label><br></br>
                        <label>Outro: </label><br></br>
                        <input type="text"></input>                       
                    </section>       
                </fieldset>
            </form>
            

        </div>
   )
}