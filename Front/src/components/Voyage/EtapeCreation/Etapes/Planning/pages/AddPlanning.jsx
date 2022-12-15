import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../../../../../Personalisation/ClickOutside";
import styles from "./AddPlanning.module.scss";
import ListeHotels from "./ListeHotels";

export default function AddPlanning() {
  const navigate = useNavigate();
  const [isPlanningOpen, setisPlanningOpen] = useState(false);
  const [journey, setJourney] = useState("");
  const [listPrestations,setListPrestations] = useState([])

  let domNode = useClickOutside(() => {
    setisPlanningOpen(false);
  });

  

  return (
    <div>
      <button
        onClick={() => setisPlanningOpen(true)}
        className="border border-slate-300 p-2 rounded-lg text-slate-500 hover:text-slate-900 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300"
      >
        + Ajouter un planning
      </button>
      <div
        className={`${styles.submenu_container} ${
          isPlanningOpen ? styles.submenu_container_active : ""
        }`}
      >
        <div
          ref={domNode}
          className={`${styles.submenu} ${
            isPlanningOpen ? styles.submenu_active : ""
          }`}
        >
          <div>
            <div className={`${styles.input} mt-10`}>
              <h2>Trajet</h2>{" "}
              <input
                type="text"
                placeholder="Votre trajet aujourd'hui"
                value={journey}
                onChange={(e) => setJourney(e.target.value)}
              />
              <button
                className="cursor-pointer rounded-md bg-blue-900 mx-48 py-2 px-11 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                onClick={() => navigate("/createHotel")}
              >
                Ajouter un hôtel
              </button>
            </div>
            <div className={styles.hotels}>
              <ListeHotels />
            </div>
            <div className={styles.Prestation}>
              <h2>Prestation</h2>
              <div className={styles.Prestainput}>
                <input type="text" placeholder="Nom du prestation" />
                <br />
                <input type="text" placeholder="Prix du prestation" />
                <select name="price">
                  <option selected>Euro</option>
                  <option selected>Ariary</option>
                </select>
                <br />
              </div>
              <div className={styles.radioType}>
                <label htmlFor="typePrestation">
                  <input type="radio" name="typePrestation" value="Single" />
                  Single
                  <input type="radio" name="typePrestation" value="Groupe" />
                  Groupe
                </label>
                <div className="py-5">
                  <button className="cursor-pointer rounded-lg bg-red-600 py-2 px-4 font-normal text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
                    Ajouter au planning
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button className="cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
              ANNULER
            </button>
            <button
              onClick={() => setisPlanningOpen(false)}
              className="cursor-pointer rounded-lg bg-green-500 py-2 px-11 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
