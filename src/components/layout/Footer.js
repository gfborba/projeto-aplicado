import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Tel: 9999-9999</p>
            <p>Projeto em react feito por Gabriel Costa Merlo e Guilherme Ferreira de borba &copy; 2024</p>
            <p>Email: fulanodetal@pizza.com</p>
        </footer>
        
    )
}

export default Footer