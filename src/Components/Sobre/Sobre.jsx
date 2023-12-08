import React from "react";
import styles from "./Sobre.module.css"

export const Sobre = () => {
    return(
        <section className={styles.container} id="sobre">
            <h2 className={title}>Sobre</h2>
            <div className={styles.content}>
                <img className={styles.sobreImg}

                />
                <ul className={styles.sobreItems}>
                    <li className={styles.sobreItem}>
                        <img/>
                        <div className={styles.sobreitemtexto}>
                            <h3>Desenvolvedor Front-End</h3>
                            <p>
                                Desenvolvedor front-end
                            </p>
                        </div>
                    </li>
                    <li className={styles.sobreItem}>
                        <img
                        />
                        <div className={styles.sobreitemtexto}>
                            <h3>Desenvolvedor Front-End</h3>
                            <p>
                                Desenvolvedor front-end
                            </p>
                        </div>
                    </li>
                    <li className={styles.sobreItem}>
                        <img/>
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