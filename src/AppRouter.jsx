import React from "react";
import { Routes, Route } from "react-router-dom";
import { CoverPage, NowMePage, MyWorkPage, ContactMePage } from "./pages";

export function AppRouter() {
    return(
        <div>
            <Routes>
                <Route path="/My-portfolio" element={<CoverPage />} />
                <Route path="/My-portfolio/now-me" element={<NowMePage />} />
                <Route path="/My-portfolio/my-work" element={<MyWorkPage />} />
                <Route path="/My-portfolio/contact-me" element={<ContactMePage />} />
            </Routes>
        </div>
    )
}