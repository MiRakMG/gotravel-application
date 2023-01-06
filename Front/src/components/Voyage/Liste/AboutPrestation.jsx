import { useEffect } from "react";
import { useGetPrestationByFaireQuery } from "../../../Services/contents";

function AboutPrestation({ id, setPax, numberClient }) {
  const { data, isSuccess } = useGetPrestationByFaireQuery({ id });
  console.log(data);

  useEffect(() => {
    if (isSuccess === true) {
      const getNumberPrice = data[0].prestation.price.split("A")
        ? data[0].prestation.price.split("A")[0]
        : data[0].prestation.price.split("E")[0];
      const price =
        data[0].prestation.type === "Single"
          ? parseInt(getNumberPrice)
          : parseInt(parseInt(getNumberPrice) / numberClient);

      setPax((prevValue) => prevValue + price);
    }
  }, [isSuccess]);
  return (
    <>
      {data?.length > 0 && (
        <tr>
          <td>{data[0].prestation.wording}</td>
          <td>{data[0].prestation.price}</td>
        </tr>
      )}
    </>
  );
}

export default AboutPrestation;
