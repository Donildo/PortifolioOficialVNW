import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Heroi } from "./Components/Heroi/Heroi";
import { Sobre } from "./Components/Sobre/Sobre";
import { Experiencia } from "./Components/Experiencia/Experiencia";
import { Projetos } from "./Components/Projetos/Projetos";
import { Contatos } from "./Components/Contatos/Contatos";

function App() {
    return(
        <div className={styles.App}>
            <Navbar/>
            <Heroi/>
            <Sobre/>
            <Experiencia/>
            <Projetos/>
            <Contatos/>
        </div>
    );
}
export default App;