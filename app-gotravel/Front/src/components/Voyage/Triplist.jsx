import styles from "./Triplist.module.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

import Tables from "./Liste/Table";

import { GoPlus } from "react-icons/go";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Triplist = () => {

  const navigate = useNavigate();
  return (
    <main>
      <div className={styles.title}>
        <div className={styles.title_big}>
          <h1>Listes des voyages</h1>
        </div>
        <div className={styles.create_btn}>
          <button onClick={()=> navigate('/createTrip') }>
            Créer un voyage <GoPlus />
          </button>
        </div>
      </div>
      <div className={styles.table}>
        <Tables />
      </div>
      <div className={styles.page_number}>
        <ul>
          <li className={styles.back}>
            <MdArrowBackIosNew />
          </li>
          <li className={styles.page}>
            <span className={styles.active_page}>1</span>
          </li>
          <li className={styles.page}>
            <span>2</span>
          </li>
          <li className={styles.page}>
            <span>3</span>
          </li>
          <li>
            <span>...</span>
          </li>
          <li className={styles.page}>
            <span>9</span>
          </li>
          <li className={styles.fw}>
            <MdArrowForwardIos />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Triplist;
