import React from "react";
import { Routes, Route } from "react-router-dom";
import { CoverPage, NowMePage, MyWorkPage, ContactMePage } from "./pages";

export function AppRouter() {
    return(
        <div>
            <Routes>
                <Route index element={<CoverPage />} />
                <Route path="/now-me" element={<NowMePage />}/>
                <Route path="/my-work" element={<MyWorkPage />}/>
                <Route path="/contact-me" element={<ContactMePage />}/>
            </Routes>
        </div>
    )
}