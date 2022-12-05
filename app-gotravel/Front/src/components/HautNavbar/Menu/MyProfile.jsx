//REACT ROUTER
import { Link } from "react-router-dom";


import useClickOutside from "../../../Personalisation/ClickOutside";
import { useState } from "react";


import styles from "./MyProfile.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";

const MyProfile = () => {
    const [isProfileOpen, setisProfileOpen] = useState(false);
    let domNode = useClickOutside(() => {
      setisProfileOpen(false);
    });
    return (
      <div
        ref={domNode}
        className={styles.avatar_container}
        onClick={() => {
          setisProfileOpen(!isProfileOpen);
        }}
      >
        {/* AVATAR ICON */}
        <div className={styles.icon_avatar_container}>
          <RiAccountCircleFill />
        </div>
  
        {/* NAME */}
        <div className={styles.name}>
          <span>GoTravel</span>
          <MdKeyboardArrowDown />
        </div>
  
        {/* AVATAR/SETTINGS MENU */}
        <div
          className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ""}`}
        >
          <div className={styles.info}>
            <span className={styles.name}>GoTravel</span>
            <span className={styles.role}>Adminstrator</span>
          </div>
          <div className={styles.settings}>
            <Link to="/">Paramètres</Link>
            <Link to="/">Déconnecter</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyProfile;