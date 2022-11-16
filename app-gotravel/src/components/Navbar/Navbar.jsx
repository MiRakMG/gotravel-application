import styles from "./Navbar.module.scss";

import React from "react";

// icons
import {
    MdViewList,
    MdCalendarToday,
    MdHotel,
    MdKitesurfing,
    MdDirectionsCarFilled,
    MdLogout,
    MdOutlineLogout,
} from "react-icons/md";
import { IoMdLogin } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import { IoMdAddCircle } from "react-icons/io";

import { NavLink } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
    const [nav, setnav] = useState(false);
        const checkWindowSize =()=>{
        if (window.innerWidth < 1024) setnav(!nav);
                                };
    const NavUrl = ({ url, icon, description }) => {
        return <li className={styles.li_navlink}>
            <NavLink 
            to={`${url}`}
            onClick={()=>checkWindowSize()}
            className={({isActive}) => (isActive ? styles.active : undefined)}>
                {icon}
                <span className={styles.description}>{description}</span>
            </NavLink>
        </li>
    };

    return <div className={`${styles.navbar_container} ${nav ? styles.navbar_mobile_active : undefined}`}>

        <nav className={nav ? undefined : styles.nav_small}>
            
            <div className={styles.logo}>
                <FaTimes className={styles.mobile_cancel_icon} onClick={() => setnav(!nav)} />
            </div>
            
            {/* Menu */}
            <ul className={styles.menu_container}>
            <button className={styles.btn}> {nav ? "+ Créer un voyage" : <IoMdAddCircle/>}</button>    
            {/* Catégories Voyages */}
                <span className={styles.categories}>
                    {nav ? "Voyages" : <BsThreeDots/> }
                </span>
                
                <NavUrl
                url="/Listes"
                icon={< MdViewList />}
                description="Listes"
                />
                                
                <NavUrl
                url="/Calendrier"
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
                url="/Hotels"
                icon={< MdHotel />}
                description="Hôtels"
                />

                <NavUrl
                url="/Activites"
                icon={< MdKitesurfing />}
                description="Activités"
                />

                <NavUrl
                url="/Location"
                icon={< MdDirectionsCarFilled />}
                description="Location"
                />

            {/* Logout btn */}
                <div className={styles.btn_logout}
                onClick={() => {
                    setnav(!nav);
                }}
                >
                    <MdOutlineLogout />
                </div>
            </ul>
        </nav>
    </div>;
};

export default Navbar;