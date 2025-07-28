import { useContext } from "react"
import { ThemeContext } from "../context/themecontext"

function Home() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return (
    
        <div className={`${theme == "dark" ? 'dark' :''}`}>
            <h1>home</h1>
            <h1>theme :{theme}</h1>
            <button onClick={toggleTheme}>mudar tema</button>
        </div>
    )
}

export default Home