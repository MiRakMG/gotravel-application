import { useGetPrestationByFaireQuery } from "../../../Services/contents";

function AboutPrestation({ id }) {
  const { data } = useGetPrestationByFaireQuery({ id });
  console.log(data);
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
