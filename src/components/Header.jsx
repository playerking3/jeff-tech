import styles from "./Header.module.css"
import NavBar from "./NavBar";

function Header(){
    return(
        <header className={styles.header}>
            <div>
                <h1 style={{color: "white"}}>Jeff Tech</h1>
            </div>
            <div className={styles.navbar}>
                <NavBar></NavBar>
                <a href="" className={styles.links}><i className="fa-solid fa-heart"></i></a>
                <a href="" className={styles.links}><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </header>
    )
}

export default Header