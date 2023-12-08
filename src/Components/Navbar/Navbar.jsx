import { useState } from "react"
import styles from "./Navbar.module.css"

import {getImageUrl} from "../../Utilitários"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portifolio
            </a>
            <div className={styles.menu}>
                <img 
                className={styles.menuBtn}
                src={
                    menuOpen
                    ? getImageUrl("assets/closeIcon.png")
                    : getImageUrl("assets/heroImage.png")

                }
                alt ="menu-button"
                onClick={() =>setMenuOpen(!menuOpen)}
                />
                <ul 
                 className={`${styles.menuItens} ${menuOpen &&  styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                    <li>
                        <a href="#Sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#Experiencia">Experiencia</a>
                    </li>
                    <li>
                        <a href="#Projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#Contatos">Contatos</a>
                    </li>
                </ul>
            </div>
        </nav>
    ) 
}