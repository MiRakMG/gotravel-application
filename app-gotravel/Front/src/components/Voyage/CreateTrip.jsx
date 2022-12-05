import { useState } from "react";

import Etape from "./EtapeCreation/Etape";
import EtapeControl from "./EtapeCreation/EtapeControl";
import { UseContextProvider } from "../../Context/EtapeContext";

import DescriptionTrip from "./EtapeCreation/Etapes/DescriptionTrip";
import Client from "./EtapeCreation/Etapes/Client";
import Planning from "./EtapeCreation/Etapes/Planning";
import Final from "./EtapeCreation/Etapes/Final";

const CreateTrip = () =>{

    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Client",
        "Description du voyage",  
        "Planning",
        "Final",
      ];
    
      const displayStep =(step)=>{
        switch(step) {
            case 1:
                return <Client />
            case 2:
                return <DescriptionTrip />
            case 3:
                return <Planning />
            case 4:
                return <Final />
            default:
        }
      };

      const handleClick = (direction) => {
        let newStep = currentStep;
    
        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
      };
    
      return (
        <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
          {/* Stepper */}
          <div className="horizontal container mt-5 ">
            <Etape steps={steps} currentStep={currentStep} />
    
            <div className="my-10 p-10 ">
              <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
            </div>
          </div>
    
          {/* navigation button */}
          {currentStep !== steps.length && (
            <EtapeControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>
      );
    }
    

export default CreateTrip;