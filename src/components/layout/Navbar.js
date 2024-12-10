import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
           
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">
                    <img src={logo} alt="logo" className={styles.img} />
                    </Link>
                </li>
            </ul>
       
      </nav>
    )
}

export default Navbar