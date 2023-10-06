import styles from "./NavBar.module.css"

function NavBar(){
    return (
            <nav>
                <a href="" className={styles.links}>Inicio</a>
                <a href="" className={styles.links}>Produtos</a>
                <a href="" className={styles.links}>Contato</a>
            </nav>
        )

}

export default NavBar