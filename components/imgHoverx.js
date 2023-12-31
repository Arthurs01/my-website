import Image from "next/image";
import ImgHover1 from "../public/img/logo/allien.png";
import styles from "../components/imgHoverx.module.css";
import crypto from "../public/img/portfolio/cryptopage.png";
import seiodm from "../public/img/portfolio/seiodm.png";
import mrhalley from "../public/img/portfolio/mr-halley.png";
import arg from "../public/img/portfolio/arg.png";
import embc from "../public/img/portfolio/embc.png";
import bussiness from "../public/img/portfolio/business.png";
import weeding from "../public/img/portfolio/weeding.png";
import CrudJsonArray from  "../public/img/portfolio/crud_json_array.png"




export default function imgHover() {
  return (
    <div className={styles.imgs}>
       <div className={styles.imgsHover}>
        <a href="https://arthurs01.github.io/cryptox/" target="_blank">
        <div className="image">
          <Image src={crypto} width={300} height={180}/>
        </div>
        <div className={styles.text}>
          <h3>Crypto API</h3>
          <h2>Fetching Data</h2>
        </div>
        </a>
      </div>

      <div className={styles.imgsHover}>
      <a href="https://mr-halley-arthurs01.vercel.app/" target="_blank">
        <div className="image">
          <Image src={mrhalley} width={300} height={180} />
        </div>
        <div className={styles.text}>
          <h3>Mr. Halley</h3>
          <h2>Rock band Page</h2>
        </div>
        </a>
      </div>
      <div className={styles.imgsHover}>
      <a href="https://seiodm.vercel.app/" target="_blank">
        <div className="image">
          <Image src={seiodm} width={300} height={180} />
        </div>
        <div className={styles.text}>
          <h3>SEIODM</h3>
          <h2>Landing Page</h2>
        </div>
        </a>
      </div>

     
      <div className={styles.imgsHover}>
        <a href="https://argsoluciones.com.mx/#/" target="_blank">
        <div className="image">
          <Image src={arg} width={300} height={180}/>
        </div>
        <div className={styles.text}>
          <h3>ARG Company</h3>
          <h2>Website</h2>
        </div>
        </a>
      </div>

      <div className={styles.imgsHover}>
        <a href="https://embc.com.mx/" target="_blank">
        <div className="image">
          <Image src={embc} width={300} height={180}/>
        </div>
        <div className={styles.text}>
          <h3>EMBC Company</h3>
          <h2>Website</h2>
        </div>
        </a>
      </div>


      <div className={styles.imgsHover}>
        <a href="https://agoagencia.github.io/boda_ruben_anahi/" target="_blank">
        <div className="image">
          <Image src={weeding} width={300} height={180}/>
        </div>
        <div className={styles.text}>
          <h3>Invitations</h3>
          <h2>Landing Page</h2>
        </div>
        </a>
      </div>

      <div className={styles.imgsHover}>
        <a href="https://arthurs01.github.io/business/" target="_blank">
        <div className="image">
          <Image src={bussiness} width={300} height={180}/>
        </div>
        <div className={styles.text}>                                                                  
          <h3>Hotelwebsite</h3>
          <h2>Landing Page</h2>
        </div>
        </a>
      </div>

  
    </div>
  );
}
