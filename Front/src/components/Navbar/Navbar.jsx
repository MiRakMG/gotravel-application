import styles from "./Navbar.module.scss";

import React from "react";
import NavContext from "../../Context/NavContext";

// icons
import {
    MdViewList,
    MdCalendarToday,
    MdHotel,
    MdKitesurfing,
    MdDirectionsCarFilled,
    MdOutlineLogout,
} from "react-icons/md";

import { FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import { IoMdAddCircle } from "react-icons/io";

import { NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";

const NavUrl = ({ url, icon, description }) => {
    const { nav, setNav } = useContext(NavContext);
    const checkWindowSize = () => {
      if (window.innerWidth < 1024) setNav(!nav);
    };
  
    return (
      <li className={styles.li_navlink}>
        <NavLink
          to={`${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          onClick={() => checkWindowSize()}
        >
          {icon}
          <span className={styles.description}>{description}</span>
        </NavLink>
      </li>
    );
  };
  
  const Navbar =() => {
    const { nav, setNav } = useContext(NavContext);
    const navigate = useNavigate();
    
    return (
        <div 
            className={`${styles.navbar_container} ${
                nav ? styles.navbar_mobile_active : undefined}`}
            >

        <nav className={nav ? undefined : styles.nav_small}>
            
            <div className={styles.logo}>
                <FaTimes className={styles.mobile_cancel_icon} onClick={() => { setNav(!nav);}} />
            </div>
            
            {/* Menu */}
            <ul className={styles.menu_container}>
            <button className={styles.btn} onClick={() => navigate('/createTrip') }> {nav ? "+ Créer un voyage" : <IoMdAddCircle/>}</button>    
            {/* Catégories Voyages */}
                <span className={styles.categories}>
                    {nav ? "Voyages" : <BsThreeDots/> }
                </span>
                
                <NavUrl
                url="/"
                icon={< MdViewList />}
                description="Listes"
                />
                                
                <NavUrl
                url="calendrier"
                icon={< MdCalendarToday />}
                description="Calendrier"
                />

            {/* Autres */}
                <span className={`${styles.categories}
                ${styles.second_category}`}
                >
                    {nav ? "Ajouts" : <BsThreeDots/> }
                </span>

                <NavUrl
                url="hotels"
                icon={< MdHotel />}
                description="Hôtels"
                />

                <NavUrl
                url="activites"
                icon={< MdKitesurfing />}
                description="Activités"
                />

                <NavUrl
                url="location"
                icon={< MdDirectionsCarFilled />}
                description="Location"
                />

            {/* Logout btn */}
                <div className={styles.btn_logout}
                onClick={() => {
                    setNav(!nav);
                }}
                >
                    <MdOutlineLogout />
                </div>
            </ul>
        </nav>

        <div
        className={nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
    </div>
    )
};

export default Navbar;