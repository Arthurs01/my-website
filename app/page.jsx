import './globals.css'
import styles from "./home.module.css";
import Image from "next/image";
import arrowDown from "../public/img/gif/down-arrow3.png";
import perfil from '../public/img/perfil/yo.jpeg'
import Contact from "website/components/contact";
import "../components/imgHoverx.module.css";
import ImgHoverx from "../components/imgHoverx";
import ImgHoverxBackend from "../components/imgHoverxBackend";
import '../components/imgHoverx.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header_home}>
        <div className={styles.header_home_content}>
          <h1>Hi</h1>
          <h1>
            {"I'm"}
            <span className={styles.color_text}> Arthur</span>
          </h1>
          <h1>web developer</h1>
          <p>
            Applications, websites and database management for your company...
          </p>
          <a href="#about">
            <button>About me</button>
          </a>
          <Image src={arrowDown} width={30} height={30} alt="ir hacia abajo" />
        </div>
        <div className={styles.perfil}>
           <Image src={perfil}   alt="Imagen de perfil" priority />
        </div>
      </header>
      <section className={styles.about_me} id="about">
        <div className={styles.about_me_left}>
          <h1>
            <span className={styles.color_text}>About me...</span>
          </h1>
          
          <br />
          <p>
            {"I'm"} a Web developer and i build apps using different types of technologies and databases as well as responsive hight quality designs for your bussiness {" "}
    
          </p>
          <br /> <br />
          <marquee scrollamount="10" style={{ maxWidth: "800px" }}>
            <h2>
              ReactJS - NextJS - NodeJs - Express - Socket.io, Javascript - Mysql - PostgreSql - phpMyAdmin - JSON Server - API/API Rest - jQuery - HTML5 - CSS3 - Bootstrap - Git -
              Github - Vercel, Heroku, Render, Railway...
            </h2>
          </marquee>
        </div>
      </section>
      <section className={styles.portfolio} id="projects">
        <div className={styles.portfolio_info}>
          <h1><span className={styles.color_text}>Recent Projects</span></h1>
            
          <br />
          <h1>Frontend...</h1>
          <p>NextJs, ReactJs...</p>
          <br />
        </div>
        <br />

      <ImgHoverx />
        <div className={styles.portfolio_info}>
          {/* <h1>
            <span className={styles.color_text}>Recent Projects</span>
          </h1> */}
          <br />
          <br />
          <h1>Backend...</h1>
          <p>NodeJs, Mysql, JSON, Express...</p>
          <br />
        </div>
        <br />
        <ImgHoverxBackend />
      </section>
      <Contact />
    </div>
  );
}
