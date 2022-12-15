import styles from "./RechercheHotels.module.scss";
import { useState } from "react";
var data = require("./EXEMPLE_REGION.json")

const RechercheHotels = ({value, setValue}) => {
    

    return (
            <div className={styles.container_search}>
                <div className={styles.input_btn}>
                    <input className={styles.input_search} type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Où allez-vous?"/>
                    <button className={styles.btn_search} >Recherche</button>
                </div>
                <div className={styles.proposition_search}>
                {data
                .filter((item) => {
                const searchTerm = value.toLowerCase();
                const region = item.region_name.toLowerCase();

                return (
                    searchTerm &&
                    region.startsWith(searchTerm) &&
                    region !== searchTerm
                );
                })
                .slice(0, 10)
                .map((item) => (
                <div
                    className={styles.recent_search}
                    key={item.region_name}
                >
                    {item.region_name}
                </div>
                ))}
                </div>
            </div>
    )
}

export default RechercheHotels;