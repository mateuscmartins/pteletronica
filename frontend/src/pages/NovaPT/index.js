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


                <h2>Riscos Envolvidos</h2>
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


                <h2>Perigos Potenciais</h2>
                <fieldset className='content' id='perigos'>
                    <section className='conteudo-esquerda'>
                        <input type="checkbox" value="projecao-particulas"/>
                        <label for="projecao-particulas" > Projeção de partículas </label><br></br>
                        <input type="checkbox" value="produtos-inflamaveis"/>
                        <label for="produtos-inflamaveis" > Produtos inflamáveis </label><br></br>
                        <input type="checkbox" value="choque-eletrico"/>
                        <label for="choque-eletrico" > Choque elétrico </label><br></br>
                        <input type="checkbox" value="ruido-excessivo"/>
                        <label for="ruido-excessivo" > Ruído excessivo </label><br></br>
                        <input type="checkbox" value="queda"/>
                        <label for="queda" > Queda / Diferença de Nível </label><br></br>
                        <input type="checkbox" value="piso-escorregadio"/>
                        <label for="piso-escorregadio" > Piso escorregadio </label><br></br>
                        <input type="checkbox" value="produto-quimico"/>
                        <label for="produto-quimico" > Contato com produto químico </label><br></br>
                        <input type="checkbox" value="queda-objetos"/>
                        <label for="queda-objetos" > Queda de objetos em geral </label><br></br>
                        <input type="checkbox" value="trabalho-telhado"/>
                        <label for="trabalho-telhado" > Trabalho sobre telhado </label><br></br>
                        <input type="checkbox" value="vapores-organicos"/>
                        <label for="vapores-organicos" > Concentração de vapores orgânicos (Incêncio e explosão) </label><br></br>
                        <input type="checkbox" value="contato-perigoso"/>
                        <label for="contato-perigoso" > Contato com ferramentas, equipamentos e peças com cantos vivos e rebarbas </label><br></br>
                    </section> 
                    <section className='conteudo-central'>
                        <input type="checkbox" value="levantamento-transporte-peso"/>
                        <label for="levantamento-transporte-peso" > Levantamento/transporte de peso </label><br></br>
                        <input type="checkbox" value="queda-PTA"/>
                        <label for="queda-PTA" > Queda de PTA </label><br></br>
                        <input type="checkbox" value="demolicao"/>
                        <label for="demolicao" > Demolição </label><br></br>
                        <input type="checkbox" value="escavacao"/>
                        <label for="escavacao" > Escavação/Desmoronamento </label><br></br>
                        <input type="checkbox" value="queda-escada"/>
                        <label for="queda-escada" > Queda de escada </label><br></br>
                        <input type="checkbox" value="queda-andaime"/>
                        <label for="queda-andaime" > Queda de andaime </label><br></br>
                        <input type="checkbox" value="radiacao"/>
                        <label for="radiacao" > Radiação não ionizante </label><br></br>
                        <input type="checkbox" value="fumos-metalicos"/>
                        <label for="fumos-metalicos" > Exposição a fumos metálicos </label><br></br>
                        <input type="checkbox" value="trabalho-quente"/>
                        <label for="trabalho-quente" > Trabalho à quente </label><br></br>
                        <input type="checkbox" value="trabalho-quente-area-explosiva"/>
                        <label for="trabalho-quente-area-explosiva" > Trabalho à quente ou projeção de faíscas em áreas com risco de explosão </label><br></br>
                        <input type="checkbox" value="produtos-inflamaveis"/>
                        <label for="produtos-inflamaveis" > Manuseio de produtos inflamáveis (fogo, explosões) </label><br></br>
                    </section> 
                    <section className='conteudo-direita'>
                        <input type="checkbox" value="detonacoes"/>
                        <label for="detonacoes" > Detonações </label><br></br>
                        <input type="checkbox" value="explosoes"/>
                        <label for="explosoes" > Explosões </label><br></br>
                        <input type="checkbox" value="poeira"/>
                        <label for="poeira" > Exposição a poeiras </label><br></br>
                        <input type="checkbox" value="gases-vapores"/>
                        <label for="gases-vapores" > Exposição a gases e vapores </label><br></br>
                        <input type="checkbox" value="equipamentos-guindar"/>
                        <label for="equipamentos-guindar" > Manuseio de equipamentos de guindar </label><br></br>
                        <input type="checkbox" value="movimentacao-maquinas"/>
                        <label for="movimentacao-maquinas" > Movimentação de máquinas </label><br></br>
                        <input type="checkbox" value="atropelamento"/>
                        <label for="atropelamento" > Atropelamento (Uso de veículo) </label><br></br>
                        <input type="checkbox" value="espaco-confinado"/>
                        <label for="espaco-confinado" > Trabalho em espaço confinado </label><br></br>
                        <input type="checkbox" value="terceiros"/>
                        <label for="terceiros" > Expor terceiros a perigos </label><br></br>
                        <label>Outro: </label><br></br>
                        <input type="text"></input>                    
                    </section>       
                </fieldset>

                <h2>Equipamentos de Proteção Individual Necessários</h2>
                <fieldset className='content' id='epi'>
                    <section className='conteudo-esquerda'>
                        <input type="checkbox" value="oculos-incolor"/>
                        <label for="oculos-incolor" > Óculos de segurança incolor </label><br></br>
                        <input type="checkbox" value="oculos-escuro"/>
                        <label for="oculos-escuro" > Óculos de segurança com lente escura </label><br></br>
                        <input type="checkbox" value="capacete-eletricista"/>
                        <label for="capacete-eletricista" > Capacete para eletricista com jugular </label><br></br>
                        <input type="checkbox" value="protetor-facial"/>
                        <label for="protetor-facial" > Protetor facial - escudo rosto </label><br></br>
                        <input type="checkbox" value="mascara-soldador"/>
                        <label for="mascara-soldador" > Máscara de soldador - escudo </label><br></br>
                        <input type="checkbox" value="escudo-arco-eletrico"/>
                        <label for="escudo-arco-eletrico" > Escudo de proteção contra arco elétrico </label><br></br>
                        <input type="checkbox" value="protetor-auricular-plug"/>
                        <label for="protetor-auricular-plug" > Protetor auricular - Plug </label><br></br>
                        <input type="checkbox" value="protetor-auricular-concha"/>
                        <label for="protetor-auricular-concha" > Protetor auricular - Concha </label><br></br>
                        <input type="checkbox" value="capacete"/>
                        <label for="capacete" > Capacete </label><br></br>
                        <input type="checkbox" value="capacete-jugular"/>
                        <label for="capacete-jugular" > Capacete com jugular - Trabalho em altura </label><br></br>
                        <input type="checkbox" value="uniforme-eletricista"/>
                        <label for="uniforme-eletricista" > Uniforme para eletricista </label><br></br>
                        <input type="checkbox" value="respirador-poeiras"/>
                        <label for="respirador-poeiras" > Respirador para poeiras, névoas e fumos </label><br></br>
                        <input type="checkbox" value="respirador-vapores"/>
                        <label for="respirador-vapores" > Respirador para vapores orgânicos </label><br></br>
                        <input type="checkbox" value="respirador-acidos"/>
                        <label for="respirador-acidos" > Respirador para gases ácidos </label><br></br>
                        <input type="checkbox" value="respirador-filtro-combinado"/>
                        <label for="respirador-filtro-combinado" > Respirador com filtros combinados </label><br></br>
                        <input type="checkbox" value="cinto-paraquedista"/>
                        <label for="cinto-paraquedista" > Cinto tipo Paraquedista </label><br></br>
                        <input type="checkbox" value="talabarte"/>
                        <label for="talabarte" > Talabarte Y ou 2 talabartes </label><br></br>
                    </section> 
                    <section className='conteudo-central'>
                        <input type="checkbox" value="perneira"/>
                        <label for="perneira" > Perneira </label><br></br>
                        <input type="checkbox" value="sapato-biqueira"/>
                        <label for="sapato-biqueira" > Sapato com biqueira </label><br></br>
                        <input type="checkbox" value="sapato"/>
                        <label for="sapato" > Sapato sem biqueira </label><br></br>
                        <input type="checkbox" value="sapato-eletricista"/>
                        <label for="sapato-eletricista" > Sapato de eletricista </label><br></br>
                        <input type="checkbox" value="luva-nitrilica"/>
                        <label for="luva-nitrilica" > Luva nitrílica </label><br></br>
                        <input type="checkbox" value="luva-latex"/>
                        <label for="luva-latex" > Luva látex </label><br></br>
                        <input type="checkbox" value="luva-pvc"/>
                        <label for="luva-pvc" > Luva PVC </label><br></br>
                        <input type="checkbox" value="luva-malha"/>
                        <label for="luva-malha" > Luva de malha </label><br></br>
                        <input type="checkbox" value="luva-vaqueta"/>
                        <label for="luva-vaqueta" > Luva vaqueta </label><br></br>
                        <input type="checkbox" value="luva-raspa"/>
                        <label for="luva-raspa" > Luva raspa </label><br></br>
                        <input type="checkbox" value="luva-isolante-2"/>
                        <label for="luva-isolante-2" > Luva isolante Classe 2 </label><br></br>
                        <input type="checkbox" value="luva-isolante-0"/>
                        <label for="luva-isolante-0" > Luva isolante Classe 0 </label><br></br>
                        <input type="checkbox" value="avental-pvc"/>
                        <label for="avental-pvc" > Avental de PVC </label><br></br>
                        <input type="checkbox" value="avental-raspa"/>
                        <label for="avental-raspa" > Avental de raspa </label><br></br>
                        <input type="checkbox" value="macacao-tyvec"/>
                        <label for="macacao-tyvec" > Macacão de ty vec </label><br></br>
                        <input type="checkbox" value="macacao-pintor"/>
                        <label for="macacao-pintor" > Macacão de pintor </label><br></br>
                        <input type="checkbox" value="mangote-raspa"/>
                        <label for="mangote-raspa" > Mangote raspa </label><br></br>
                    </section> 
                    <section className='conteudo-direita'>
                        <input type="checkbox" value="guarda-corpo"/>
                        <label for="guarda-corpo" > Guarda-corpo </label><br></br>
                        <input type="checkbox" value="linha-vida-movel"/>
                        <label for="linha-vida-movel" > Linha de vida móvel </label><br></br>
                        <input type="checkbox" value="linha-vida-fixa"/>
                        <label for="linha-vida-fixa" > Linha de vida fixa </label><br></br>
                        <input type="checkbox" value="placas-sinalizacao"/>
                        <label for="placas-sinalizacao" > Placas de sinalização </label><br></br>
                        <input type="checkbox" value="isolamento-area"/>
                        <label for="isolamento-area" > Isolamento de área </label><br></br>
                        <input type="checkbox" value="tapume-solda"/>
                        <label for="tapume-solda" > Tapume para solda </label><br></br>
                        <input type="checkbox" value="tapete-isolante"/>
                        <label for="tapete-isolante" > Tapete isolante </label><br></br>
                        <input type="checkbox" value="cobertura-isolante"/>
                        <label for="cobertura-isolante" > Cobertura isolante </label><br></br>
                        <input type="checkbox" value="ferramentas-isoladas"/>
                        <label for="ferramentas-isoladas" > Conjunto de ferramentas isoladas </label><br></br>
                        <input type="checkbox" value="cones-sinalizacao"/>
                        <label for="cones-sinalizacao" > Cones de sinalização </label><br></br>
                        <input type="checkbox" value="fitas-sinalizacao"/>
                        <label for="fitas-sinalizacao" > Fitas de sinalização </label><br></br>
                        <input type="checkbox" value="escoramento"/>
                        <label for="escoramento" > Escoramento </label><br></br>
                        <input type="checkbox" value="tapumes"/>
                        <label for="tapumes" > Tapumes </label><br></br>
                        <label>Outro: </label><br></br>
                        <input type="text"></input>                    
                    </section>       
                </fieldset>
            </form>
            

        </div>
   )
}