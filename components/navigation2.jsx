'use client'

import {useState} from 'react'
import Image from "next/image";
import styles from './navigation.module.css'
import whatsapp from '../public/img/social/whatsapp.png'
import facebook from '../public/img/social/face.png'
import logo from '../public/img/logo/allien.png'
import {animateScroll as scroll} from "react-scroll";
import Link from 'next/link';


export default function Navigation2(){
    const[scrollTop, setScrollTop] = useState();
    
    const scrollTopY = () =>{
        scroll.scrollToTop();
    }
    return(
        <div className={styles.navigation2}>
            
           <nav>
           <div className={styles.logo}>
            <Link href="/"onClick={() => setScrollTop(scrollTopY)}>
                <Image src={logo} width={40} alt="Da click para ir al home" />
            </Link>
            </div>
            <ul>
                <li><Link href="/"onClick={() => setScrollTop(scrollTopY)}>Home</Link></li><br/>
                <li><a href="#about">About</a></li><br/>
                <li><a href="#projects">Projects</a></li><br/>
                <li><a href="#contact">Contact</a></li>
            </ul>
           </nav>
           <div className={styles.social}>
            <a href='https://www.facebook.com/arturo.lopez.940641' target="_blank" rel="noopener noreferrer"><Image src={facebook} width={56} height={56} alt="Acceso a mi facebook"/></a><br/>
            <a href="https://wa.me/526622284871?text=Contactar%20con%20un%20asesor"target="_blank" rel="noopener noreferrer"></a><Image src={whatsapp} width={40} height={40} alt="Acceso a mi whatsapp"/>
           </div>


        </div>
    )
}