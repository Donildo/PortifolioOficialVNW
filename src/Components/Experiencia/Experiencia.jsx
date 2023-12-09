import React from "react";
import styles from "./Experiencia.module.css"

export const Experiencia = () => {
    return (
        <section className={styles.container} id="Experiencia">
            <h2 className={styles.title}>Experienica</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.skillImgContainer}>
                            <img src=""/>
                        </div>
                        <p></p>
                    </div>
                </div>
                <ul className={styles.historico}>
                    <li className={styles.historicoItem}>
                        <img/>
                        <div className={styles.historicoitemdetalhes}>
                            <h3></h3>
                            <p></p>
                            <ul>
                                
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}