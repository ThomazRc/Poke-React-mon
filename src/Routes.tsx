import { Route, Routes } from "react-router-dom"
import { ErrorPage } from "./pages/ErrorPage"
import { AboutPage } from "./pages/AboutPage"
import { HomePage } from "./pages/HomePage"

export const RouteMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/> } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>   
    )
}