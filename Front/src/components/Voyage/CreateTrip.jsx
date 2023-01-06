import { useEffect, useState } from "react";

import Etape from "./EtapeCreation/Etape";
import EtapeControl from "./EtapeCreation/EtapeControl";
import { UseContextProvider } from "../../Context/EtapeContext";

import DescriptionTrip from "./EtapeCreation/Etapes/DescriptionTrip";
import Client from "./EtapeCreation/Etapes/Client";
import Planning from "./EtapeCreation/Etapes/Planning";
import Final from "./EtapeCreation/Etapes/Final";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationCreateVoyage } from "../Validation/validationCreateVoyage";
import { useAddClientMutation } from "../../Services/clients";
import { useAddPrendreHotelMutation } from "../../Services/createHotelsApi";

const CreateTrip = () => {
  const [addClient, { data: dataResultClient, isSuccess: SuccessClient }] =
    useAddClientMutation();
  const [addPrendreHotel] = useAddPrendreHotelMutation();

  const [currentStep, setCurrentStep] = useState(1);
  const [dataClient, setDataClient] = useState({});

  const [dateVoyage, setDateVoyage] = useState({});

  const [completePlanning, setCompletePlanning] = useState(false);

  // Data structured
  const [prendre, setPrendre] = useState([]);
  const [listPrestations, setListPrestations] = useState([]);

  const steps = ["Client", "Description du voyage", "Planning", "Final"];

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(
      currentStep > 2 ? null : validationCreateVoyage[currentStep - 1]
    ),
    defaultValues: {
      number: 1,
    },
  });

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Client register={register} errors={errors} />;
      case 2:
        return <DescriptionTrip register={register} errors={errors} />;
      case 3:
        return (
          <Planning
            dateVoyage={dateVoyage}
            setCompletePlanning={setCompletePlanning}
            setPrendre={setPrendre}
            setListPrestations={setListPrestations}
          />
        );
      case 4:
        return <Final />;
      default:
    }
  };
  const onClickNextButon = (data) => {
    setDataClient({ name: data?.name, number: data?.number });
    setDateVoyage({ dateStart: data?.dateStart, dateFin: data?.dateFin });
  };

  const handleClick = async (direction, aboutBtn = null) => {
    let newStep = currentStep;
    handleSubmit(onClickNextButon)();
    // Verify if the currentStep form is valid
    if (isValid) {
      direction === "next" ? newStep++ : newStep--;
      // check if steps are within bounds
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

      // Post data in bdd onClickConfirmButton
      if (aboutBtn?.target.innerText === "CONFIRM") {
        await addClient(dataClient);
      }
    }
  };

  useEffect(() => {
    console.log(SuccessClient);
    if (SuccessClient === true) {
      const { code_cli } = dataResultClient;
      // Add prendre
      console.log("Add prendre")
      prendre?.forEach((prendreItem) => {
        prendreItem.client = code_cli;
        console.log(prendreItem)
        addPrendreHotel(prendreItem);
      });
    }
  }, [SuccessClient]);

  console.log(listPrestations)

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/5">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Etape steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>
      {/* navigation button */}
      {(currentStep < 3 || completePlanning) && currentStep !== 4 && (
        <EtapeControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
};

export default CreateTrip;
