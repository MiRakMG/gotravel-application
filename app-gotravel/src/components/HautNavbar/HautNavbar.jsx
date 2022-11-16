import styles from "./HautNavbar.module.scss";
import { useContext } from "react";
import NavContext from "../../Context/NavContext";

import { MdOutlineMenu } from "react-icons/md";

import MyProfile from "./Menu/MyProfile";
import Search from "./Menu/Recherche";

const RightNavbar = () => {
    const { nav, setNav } = useContext(NavContext);

    return (
        <div className={styles.container}>
                  {/* BURGER */}
            <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
        }}
            >
        <MdOutlineMenu />
            </div>
            <div className={styles.actions}>
                <Search />
            </div>
                <MyProfile />
        </div>
    )
 }

 export default RightNavbar;