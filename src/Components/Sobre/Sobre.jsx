import React from "react";

import styles from "./Sobre.module.css"
import { getImageUrl } from "../../Utilitários"

export const Sobre = () => {
    return(
        <section className={styles.container} id="Sobre">
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl("assets/aboutImage.png")}
                alt="Laptop"
                className={styles.sobreImg}
                />
                <ul className={styles.sobreItems}>
                    <li className={styles.sobreItem}>
                        <img src={getImageUrl("assets/cursorIcon.png")} alt="Icon Cursor"/>
                        <div className={styles.sobreitemtexto}>
                            <h3>Desenvolvedor Front-End</h3>
                            <p>
                                Desenvolvedor front-end
                            </p>
                        </div>
                    </li>
                    <li className={styles.sobreItem}>
                        <img src={getImageUrl("assets/serveIcon.png")} alt="Server icon"/>
                        <div className={styles.sobreitemtexto}>
                            <h3>Desenvolvedor Front-End</h3>
                            <p>
                                Desenvolvedor front-end
                            </p>
                        </div>
                    </li>
                    <li className={styles.sobreItem}>
                        <img src={getImageUrl("assets/cursoIcon.png")} alt="UI ICON"/>
                        <div className={styles.sobreitemtexto}>
                            <h3>Desenvolvedor Front-End</h3>
                            <p>
                                Desenvolvedor front-end
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}