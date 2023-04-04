import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Logon from './pages/Logon';
import NovaPT from './pages/NovaPT';
import ListaPT from './pages/ListaPT';
import ExibirPT from './pages/ExibirPT';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" exact element={<Logon />} />
                <Route  path="/emitir-pt" element={<NovaPT />} />
                <Route  path="/lista-pt" element={<ListaPT />} />
                <Route  path="/exibir-pt" element={<ExibirPT />} />
            </Routes>
        </BrowserRouter>
    )
}