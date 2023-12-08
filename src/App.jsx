import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Heroi } from "./Components/Heroi/Heroi"
function App() {
    return(
        <div className={styles.App}>
            <Navbar/>
            <Heroi/>
            <Sobre/>
        </div>
    );
}
export default App;