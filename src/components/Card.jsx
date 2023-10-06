import styles from "./Card.module.css"

function Card(props){
    return(
        <div className={styles.card}>
            <img src={props.image} alt="Produto" className={styles.image}/>
            <p className={styles.titulo}>{props.titulo}</p>
            <div className={styles.info}>
                <p className={styles.preco}>{props.preco}</p>
                <a href="" className={styles.botao}>Ver mais</a>
            </div>
            <button className={styles.coracao}><i className="fa-solid fa-heart"></i></button>

        </div>
    )
}

export default Card