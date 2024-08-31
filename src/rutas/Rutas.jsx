import React from "react";
import { Routes, Route, BrowserRouter } from "react"
import Header from "../components/Header";

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* Layout */}
            <Header />

            {/* Contenido central y rutas */}
            <section>
                <Routes>
                    <Route path='/' element={<Inicio />} />

                    <Route path='*' element={
                        <div>
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>

            </section>
            
            <Footer />

        </BrowserRouter>
    )
}