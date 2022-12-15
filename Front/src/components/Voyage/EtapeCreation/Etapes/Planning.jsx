import React from "react";
import DaysBar from "./Planning/components/DaysBar";
import DaysPage from "./Planning/components/DaysPage";


export default function Planning() {


    return ( 
        
    <div>
        <div className="flex ">
        {/* DaysBar*/}
        <div className="flex-1 h-96 w-10">
            <DaysBar un="Bonjour" deux="Hello" />
        </div>

        {/* section*/}
        <div className="flex-1">
            <DaysPage />
        </div>
    </div>
    </div>
    )
}