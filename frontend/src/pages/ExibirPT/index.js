import React from 'react';

import './styles.css';

export default function ExibirPT() {

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
               Permissão de Trabalho - 0001
            </h1>


                <h2>Ordem de Serviço</h2>
                <fieldset className='content'>
                        
                        <section className='ordem-servico'>
                            <h3>Número da Ordem de Serviço</h3>
                            <p>123456</p>
                            <h3>Descrição do serviço</h3>
                            <p>Substituir lâmpada do posto da entrada principal</p>
                        </section>

                        <section className='datas'>
                            
                            <div className='secao-dividida'>
                                <div id='data-inicio'>
                                    <h3>Data de início</h3>
                                    <p>30/04/2023</p>
                                </div>
                                <div id='data-termino'>
                                    <h3>Data de término previsto</h3>
                                    <p>07/05/2023</p>
                                </div>
                            </div>
                        </section>        

                        <section className='local-execucao'>
                            <h3>Local de execução do serviço</h3>
                            <p>Portaria principal</p>
                        </section>    
                    
                        <section className='area-restrita'>
                            <div className='secao-dividida'>
                                <h3>Área restrita</h3>
                                <p>Não</p>
                            </div>
                        </section>

                </fieldset>

                <h2>Profissionais Autorizados a Executar a Ordem de Serviço</h2>
                <fieldset>
                    <div className='dados-profissionais'>
                        <h3>Encarregado</h3>
                        <h4>Nome</h4>
                        <p>Fulano da Silva</p>

                        <h4>Matrícula</h4>
                        <p>9876545</p>
                        
                        <h4>Função</h4>
                        <p>Encarregado de elétrica</p>
                        <hr></hr>

                        <h3>Profissional de manutenção</h3>
                        <h4>Nome</h4>
                        <p>Fulano da Silva</p>

                        <h4>Matrícula</h4>
                        <p>9876545</p>

                        <h4>Função</h4>
                        <p>Eletrcista</p>

                        <h4>Nome</h4>
                        <p>Fulano da Silva</p>

                        <h4>Matrícula</h4>
                        <p>9876545</p>

                        <h4>Função</h4>
                        <p>Eletrcista</p>
                    </div>
                </fieldset>

                <h2>Riscos Envolvidos</h2>
                <fieldset className='content' id='riscos'>
                    <ul>
                        <li>Choque  elétrico</li>
                        <li>Choque  elétrico</li>
                    </ul>       
                </fieldset>


                <h2>Perigos Potenciais</h2>
                <fieldset className='content' id='perigos'>
                    <ul>
                        <li>Choque  elétrico</li>
                    </ul>       
                </fieldset>

                <h2>Equipamentos de Proteção Individual/Coletivo Necessários</h2>
                <fieldset className='content' id='epi'>
                    <ul>
                        <li>Choque  elétrico</li>
                    </ul>       
                </fieldset>

                <h2>Medidas Preventivas</h2>
                <fieldset className='content' id='medidas-preventivas'>
                <ul>
                        <li>Choque  elétrico</li>
                    </ul>       
                </fieldset>            

        </div>
   )
}