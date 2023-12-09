import React from "react";

import styles from "./Contatos.module.css";

export const Contatos = () => {
    return(
        <footer id="Contatos"className={styles.container}>
            <div className={styles.text}>
                <h2>Contatos</h2>
                <p>Faça seu orçamento</p>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src="" alt="" />
                        <a href="">devfrontdonildo@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src="" alt="" />
                        <a href="">Linkedin.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src="" alt="" />
                        <a href="">github.com</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}