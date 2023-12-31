import Image from "next/image";

import styles from "../components/imgHoverx.module.css";
import CrudJsonArray from  "../public/img/portfolio/crud_json_array.png"
import inventory from  "../public/img/portfolio/inventory.png"
import login from  "../public/img/portfolio/xlogin.png"
import lyrics from  "../public/img/portfolio/find-lyrics.png"
import data from  "../public/img/portfolio/xdata.png"
import books from  "../public/img/portfolio/books.png"




export default function imgHoverxBackend() {
  return (
    <div className={styles.imgs}>
      <div className={styles.imgsHover}>
      <a href="https://app-b9f8a631-a47c-44c8-aef1-5f660224b53e.cleverapps.io/" target="_blank">
        <div className="image">
          <Image src={lyrics} width={300} height={180} />
        </div>
        <div className={styles.text}>
          <h3>Lyrics API</h3>
          <h2>Node - Express</h2>
        </div>
        </a>
      </div>
      <div className={styles.imgsHover}>
      <a href="https://login-production-be7b.up.railway.app/" target="_blank">
        <div className="image">
          <Image src={login} width={300} height={180} />
        </div>
        <div className={styles.text}>
          <h3>Login</h3>
          <h2>Node - Mysql</h2>
        </div>
        </a>
      </div>
    
      <div className={styles.imgsHover}>
      <a href="https://crudx-mysql-production.up.railway.app/" target="_blank">
        <div className="image">
          <Image src={inventory} width={300} height={180} />
        </div>
        <div className={styles.text}>
          <h3>Inventory</h3>
          <h2>Node - Mysql</h2>
        </div>
        </a>
      </div>

    

      {/* <div className={styles.imgsHover}>
        <a href="https://node-books-9oyp.onrender.com"target="_blank">
        <div className="image">
          <Image src={books} width={300} height={180}/>
        </div>
        <div className={styles.text}>
          <h3>Books app</h3>
          <h2>JSON Database</h2>
        </div>
        </a>
      </div>  */}
    </div>
  );
}
