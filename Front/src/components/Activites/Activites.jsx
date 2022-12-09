import styles from "./Activites.module.scss";
import { WiStars } from "react-icons/wi";
import { GoPlus } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Pics from "../../pics/pics.jpg";
import Pics1 from "../../pics/pics1.jpg";
import Pics2 from "../../pics/pics2.jpg";
import Pics3 from "../../pics/pics3.jpg";

const Card = ({ activites_image }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.info}>
        <div className={styles.photo_container}>
          <img src={activites_image} alt="person" />
        </div>
        <span className={styles.name}>Nom activités</span>
        <div className={styles.country}>
          <BsArrowRightShort />
          GR
        </div>
      </div>
      <div className={styles.message}>
        <span>
        <GoPlus /> Ajouter au planning
        </span>
      </div>
    </div>
  );
};

const Activites = () => {
  const profiles = [
    Pics,
    Pics1,
    Pics2,
    Pics3,
  ];

  return (
    <main>
      <div className={styles.title}>
        <div className={styles.title_icon}>
          <h1>Activités</h1>
          <WiStars />
        </div>
        <div className={styles.create_btn}>
          <button>
            Activités
            <GoPlus />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        {profiles.map((profile, index) => (
          <Card activites_image={profile} key={index} />
        ))}
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

export default Activites;
