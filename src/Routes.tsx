import { Route, Routes } from "react-router-dom"
import { ErrorPage } from "./pages/ErrorPage"
import { AboutPage } from "./pages/AboutPage"

export const RouteMain = () => {
    return (
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>   
    )
}