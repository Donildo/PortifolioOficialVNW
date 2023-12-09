import React from "react";
import  styles from ".ProjetoCard.module.css"

export const ProjetoCard = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img}/>
            <h3 className={styles.title}>Titulo</h3>
            <p className={styles.description}>descrição</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>
                    skill
                </li>
            </ul>
            <div className={styles.links}>
                <a href="">Demo</a>
                <a href="">Codigo</a>
            </div>
        </div>
    )
}