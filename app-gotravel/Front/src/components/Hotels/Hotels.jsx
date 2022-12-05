import styles from "./Hotels.model.scss";
import RechercheHotels from "./RechercheHotels";
import HotelList from "./HotelList";

const Hotels = () => {
    return (
        <main>
            <div className={styles.container_hotels}>
                <RechercheHotels />
                <HotelList />
            </div>
        
        </main>
    )
}

export default Hotels;

