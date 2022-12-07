import styles from "./Hotels.model.scss";
import RechercheHotels from "./RechercheHotels";
import HotelList from "./HotelList";
import { useNavigate } from "react-router-dom";

const Hotels = () => {

    const navigate = useNavigate();
    return (
        <main>
            <div className={styles.containerhotels}>
                <div className="flex">
                    <RechercheHotels />
                    <button className="cursor-pointer rounded-md bg-blue-900 py-2 px-11 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white" onClick={()=> navigate('/createHotel')}>Ajouter un hôtel</button>
                </div>
                <HotelList />
            </div>
        
        </main>
    )
}

export default Hotels;

