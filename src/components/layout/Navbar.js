import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import pizza from '../../img/pizza-header.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">
                    <img src={pizza} alt="logo" className={styles.img} />
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/search">Sobre</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/products">Produtos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
            </Container>
       
      </nav>
    )
}

export default Navbar