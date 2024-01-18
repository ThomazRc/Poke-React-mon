import { Link } from "react-router-dom"
import { ErrorSection } from "./style"

export const ErrorPage = () => {
    return (
       <main>
        <ErrorSection>
            <img/>
            <h2>Opss... Do not catch the pokemon</h2>
            <Link to={"/"}>Voltar</Link>
        </ErrorSection>
       </main>
    )
}