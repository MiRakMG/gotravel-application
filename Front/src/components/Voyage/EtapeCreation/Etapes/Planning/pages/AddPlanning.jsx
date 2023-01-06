import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../../../../../Personalisation/ClickOutside";
import styles from "./AddPlanning.module.scss";
import ListeHotels from "./ListeHotels";

export default function AddPlanning({
  dateSelected,
  isPlanningOpen,
  setisPlanningOpen,
  handleAddClick,
  setPrendre,
  setListPrestations,
}) {
  const navigate = useNavigate();
  const [journey, setJourney] = useState("");
  const [dataPrestation, setDataPrestation] = useState({
    wording: "",
    price: "",
    value: "Ariary",
    type: "Single",
  });
  // Choice in listHOtels
  const [hotelChoice, setHotelChoice] = useState("");
  const [seasonChoice, setSeasonChoice] = useState("");
  const [categoryChoice, setCategoryChoice] = useState("");
  const [typeChoice, setTypeChoice] = useState("");

  let domNode = useClickOutside(() => {
    setisPlanningOpen(false);
  });

  const onChangeDatePrestation = ({ name, value }) => {
    setDataPrestation((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleValidatePlanning = () => {
    console.log("Validate planning");
    setisPlanningOpen(false);
    handleAddClick();

    const prendre = {
      hotel: hotelChoice,
      date: new Date(dateSelected?.date).toISOString().split("T")[0],
      journey,
      date_number: "day " + dateSelected.day_number,
      category: categoryChoice,
      saison: seasonChoice,
      type: parseInt(typeChoice),
    };
    setPrendre((prevState) => [...prevState, prendre]);
  };

  const addPrestation = () => {
    let prestation = dataPrestation;
    prestation.price = prestation.price + prestation.value;
    prestation.date = new Date(dateSelected?.date).toISOString().split("T")[0];
    delete prestation.value;
    setListPrestations((prevState) => [...prevState, prestation]);
    setDataPrestation({
      wording: "",
      price: "",
      value: "Ariary",
      type: "Single",
    });
  };

  return (
    <div>
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
              <ListeHotels
                setHotelChoice={setHotelChoice}
                seasonChoice={seasonChoice}
                setSeasonChoice={setSeasonChoice}
                categoryChoice={categoryChoice}
                setCategoryChoice={setCategoryChoice}
                typeChoice={typeChoice}
                setTypeChoice={setTypeChoice}
              />
            </div>
            <div className={styles.Prestation}>
              <h2>Prestation</h2>
              <div className={styles.Prestainput}>
                <input
                  type="text"
                  placeholder="Nom du prestation"
                  name="wording"
                  value={dataPrestation.wording}
                  onChange={(e) => onChangeDatePrestation(e.target)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Prix du prestation"
                  name="price"
                  value={dataPrestation.price}
                  onChange={(e) => onChangeDatePrestation(e.target)}
                />
                <select
                  name="value"
                  value={dataPrestation.value}
                  onChange={(e) => onChangeDatePrestation(e.target)}
                >
                  {/* <option value="E">Euro</option> */}
                  <option value="Ariary">Ariary</option>
                </select>
                <br />
              </div>
              <div className={styles.radioType}>
                <label htmlFor="typePrestation">
                  <input
                    type="radio"
                    value="Single"
                    name="type"
                    onChange={(e) => onChangeDatePrestation(e.target)}
                  />
                  Single
                  <input
                    type="radio"
                    value="Groupe"
                    name="type"
                    onChange={(e) => onChangeDatePrestation(e.target)}
                  />
                  Groupe
                </label>
                <div className="py-5">
                  <button
                    onClick={addPrestation}
                    className="cursor-pointer rounded-lg bg-red-600 py-2 px-4 font-normal text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                  >
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
              onClick={() => handleValidatePlanning()}
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
