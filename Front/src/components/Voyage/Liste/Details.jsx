import React from 'react'
import useClickOutside from '../../../Personalisation/ClickOutside';
import styles from "./Details.module.scss"
import {useState} from "react"
import ListsDay from './ListsDay';

function Details() {
    const [isDetailsOpen, setisDetailsOpen] = useState(false);
    let domNode = useClickOutside(() => { 
        setisDetailsOpen(false)
    })


  return (
    <div onClick={() => setisDetailsOpen(true)}> <button>Détails</button> 
        <div className={`${styles.submenu_container} ${
          isDetailsOpen ? styles.submenu_container_active : ""
        }`}>
            <div
                ref={domNode}
                className={`${styles.submenu} ${isDetailsOpen ? styles.submenu_active : ""}`}
            >
                <div>
                    <div className={styles.detailsVoyage}>
                        <h3>Details du voyage</h3>
                        <ListsDay/>
                        <ListsDay/>
                        <ListsDay/>
                    </div>
                        <h1>Total par pax :</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details