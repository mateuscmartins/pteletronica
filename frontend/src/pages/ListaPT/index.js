import React from 'react';

import './styles.css';

export default function ListaPT() {
    return (
        <div className='container'>
            <header>
                <div>LOGO</div>
                <div className='links'> 
                    <a href='/emitir-PT' className='button'>
                        Emitir nova PT
                    </a>

                    <a href='/'>
                        Logout
                    </a>
                </div>
            </header>

            <h1>
                Permissões de trabalho emitidas
            </h1>

            
            <ul>
                <li>

                    <h2>Número da PT</h2>
                    <p className='id-pt'>0001</p>
                    

                    <p className='status'>Status: <span>Parcialmente aprovada</span></p>

                    <h2>Descrição do Serviço</h2>
                    <p>Substituir lâmpada no poste de entrada</p>
                    
                    <h2>Ordem de serviço</h2>
                    <p>123456</p>

                    <a href='/exibir-pt'>Visualizar</a>
                </li>

                <li>

                    <h2>Número da PT</h2>
                    <p className='id-pt'>0001</p>
                    
                    <p className='status'>Status: <span>Concluída</span></p>

                    <h2>Descrição do Serviço</h2>
                    <p>Substituir lâmpada no poste de entrada</p>
                    
                    <h2>Ordem de serviço</h2>
                    <p>123456</p>

                    <a href='/exibir-pt'>Visualizar</a>
                </li>

                <li>

                    <h2>Número da PT</h2>
                    <p className='id-pt'>0001</p>
                    
                    <p className='status'>Status: <span>Aguardando aprovação</span></p>

                    <h2>Descrição do Serviço</h2>
                    <p>Substituir lâmpada no poste de entrada</p>
                    
                    <h2>Ordem de serviço</h2>
                    <p>123456</p>

                    <a href='/exibir-pt'>Visualizar</a>
                </li>

                <li>

                    <h2>Número da PT</h2>
                    <p className='id-pt'>0001</p>

                    <p className='status'>Status: <span>Aprovada</span></p>
                    
                    <h2>Descrição do Serviço</h2>
                    <p>Substituir lâmpada no poste de entrada</p>
                    
                    <h2>Ordem de serviço</h2>
                    <p>123456</p>

                    <a href='/exibir-pt'>Visualizar</a>
                </li>
            </ul>
        
        </div>
    );
}