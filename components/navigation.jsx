import styles from './navigation.module.css'
import Link from "next/link"


export default function Navigation() {
    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <nav>
                    <p>AL</p>
                   
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                       {/*  <li><a href='#blog'>Blog</a></li> */}
                        <li><a href='#Contact'>Contact</a></li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}