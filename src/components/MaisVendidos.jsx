import styles from "./MaisVendidos.module.css"
import Card from "./Card";

function MaisVendidos(){
    return (
        <div>
            <h1 className={styles.titulo}>Os mais vendidos:</h1>
            <div className={styles.grid}>
                <Card image="/PCgamer.png" titulo="Computador Gamer" preco="R$3.214,99"></Card>
                <Card image="/controlePS5.png" titulo="Controle PS5 FIFA" preco="R$537,82"></Card>
                <Card image="/S21fe.png" titulo="Samsung Galaxy S21 FE" preco="R$2.485,34"></Card>
                <Card image="/Zenbook.png" titulo="Notebook ASUS ZenBook" preco="R$1.469,85"></Card>
            </div>
        </div>


    )
}

export default MaisVendidos