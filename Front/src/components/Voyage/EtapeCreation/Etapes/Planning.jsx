import React, { useState } from "react";
import AddPlanning from "./Planning/pages/AddPlanning";
import { useAddClientMutation } from "../../../../Services/clients";

export default function Planning({ dateVoyage: { dateStart, dateFin }, setCompletePlanning,setPrendre }) {
  const [isPlanningOpen, setisPlanningOpen] = useState(false);
  const [dayPlanified, setDayPlanified] = useState([1]);
  const [dateSelected, setDateSelected] = useState(null);
  const handleClickDayPlanning = () => setisPlanningOpen(true);
 
  const handleAddClick = () => {
    setCompletePlanning(Date.parse(dateFin) === dateSelected?.date)
    !(Date.parse(dateFin) === dateSelected?.date) &&
      setDayPlanified([...dayPlanified, dayPlanified.length + 1]);
  };
  return (
    <>
      {dayPlanified.map((day) => (
        <>
          <div className=" " key={day}>
            <div className="w-10 mb-2">
              <section>
                <div className="w-28 bg-blue-900 text-white text-xl uppercase font-lighter rounded-lg">
                  <p
                    onClick={() => {
                      setDateSelected({
                        day_number: day,
                        date: Date.parse(dateStart) + ((day - 1) * 24 * 3600000),
                      });
                      handleClickDayPlanning();
                    }}
                    className="borderw-full h-full px-4 centered"
                  >
                    Days {day}
                  </p>
                  {/* <p className="border w-full h-full px-4 centered">Days 2</p>
              <p className="border w-full h-full px-4 centered">Days 3</p> */}
                </div>
              </section>
            </div>

            {/* section*/}
          </div>
        </>
      ))}
      <div className="flex-1">
        <AddPlanning
          dateSelected={dateSelected}
          isPlanningOpen={isPlanningOpen}
          setisPlanningOpen={setisPlanningOpen}
          handleAddClick={handleAddClick}
          setPrendre={setPrendre}
        />
      </div>
    </>
  );
}
