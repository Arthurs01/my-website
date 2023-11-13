import Image from "next/image";

import styles from "../components/imgHoverx.module.css";
import CrudJsonArray from  "../public/img/portfolio/crud_json_array.png"
import inventary from  "../public/img/portfolio/inventary.png"
import login from  "../public/img/portfolio/xdata.png"
import usuarios from  "../public/img/portfolio/usuarios.png"
import books from  "../public/img/portfolio/books.png"




export default function imgHoverxBackend() {
  return (
    <div className={styles.imgs}>
      <div className={styles.imgsHover}>
      <a href="https://crud-mysql-lw7s.onrender.com/" target="_blank">
        <div className="image">
          <Image src={inventary} width={300} height={180} />
        </div>
        <div className={styles.text}>
          <h3>Inventory</h3>
          <h2>Using Mysql</h2>
        </div>
        </a>
      </div>

      <div className={styles.imgsHover}>
        <a href="https://login-kz22.onrender.com/"target="_blank">

        <div className="image">
          <Image src={login} width={300} height={180}/>
        </div>
        <div className={styles.text}>
          <h3>Login</h3>
          <h2>Using Mysql</h2>
        </div>
        </a>
      </div>

      <div className={styles.imgsHover}>
        <a href="https://crud-node-json.onrender.com/"target="_blank">
        <div className="image">
          <Image src={usuarios} width={300} height={180}/>
        </div>
        <div className={styles.text}>                                                                  
          <h3>Users</h3>
          <h2>JSON Database</h2>
        </div>
        </a>
      </div>

      <div className={styles.imgsHover}>
        <a href="https://node-books-9oyp.onrender.com"target="_blank">
        <div className="image">
          <Image src={books} width={300} height={180}/>
        </div>
        <div className={styles.text}>
          <h3>Books app</h3>
          <h2>JSON Database</h2>
        </div>
        </a>
      </div>

      <div className={styles.imgsHover}>
        <a href="https://crud-json-array.vercel.app/" target="_blank">
        <div className="image">
          <Image src={CrudJsonArray} width={300} height={180}/>
        </div>
        <div className={styles.text}>                                                                  
          <h3>Task app</h3>
          <h2>CRUD ARRAY</h2>
        </div>
        </a>
      </div>


    

  
    </div>
  );
}
