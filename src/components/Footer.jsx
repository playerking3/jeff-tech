import styles from "./Footer.module.css"
import NavBar from "./NavBar";

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.cima}>
                <div>
                    <h1 style={{color: "white"}}>Jeff Tech</h1>
                </div>
                <div>
                    <NavBar></NavBar>
                </div>
            </div>
            <hr className={styles.linha}/>
            <div className={styles.baixo}>
                <p>Todos os direitos reservados - 2023</p>
            </div>
        </footer>
    )
}

export default Footer