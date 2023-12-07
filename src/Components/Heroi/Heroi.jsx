import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá meu nome é Donildo</h1>
                <p className={styles.description}>
                    Sou desenvolvedor front-end
                </p>
                <a href="" className={styles.contactBtn}>
                    Contatos
                </a>
            </div>
                <img
                  src=""
                  alt="Avatar do Heroi"
                />
                <div></div>
                <div></div>
        </section>
    )
}