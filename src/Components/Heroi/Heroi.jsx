import React from "react"
import styles from "./Heroi.module.css"

import { getImageUrl } from "../../Utilitários"

export const Heroi = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá meu nome é Donildo</h1>
                <p className={styles.description}>
                    Sou Desenvolvedor front-end junior. Experiencia com React, Next e Angular
                </p>
                <a href="devfrontdonildo@gmail.com" className={styles.contactBtn}>
                    Contatos
                </a>
            </div>
                <img
                  src={getImageUrl("assets/heroImage.png")}
                  alt="Avatar do Heroi"
                  className={styles.heroImg}
                />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>    
        </section>
    )
}