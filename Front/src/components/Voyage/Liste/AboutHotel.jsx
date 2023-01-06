import { useGetPrendreByIdQuery } from "../../../Services/createHotelsApi";
import { useGetPrestationQuery } from "../../../Services/prestations";

function AboutHotel({ id }) {
  const { data } = useGetPrendreByIdQuery({ id: 1 });
  console.log(data);
  return (
    <>
      {data?.length > 0 && (
        <tr>
          <td>{data[0]?.hotel.name}</td>
          <td>{data[0]?.saison.code_saison}</td>
          <td>{data[0]?.category}</td>
          <td>{data[0]?.type?.wording_type}</td>
          <td>{data[0]?.hotel.content[0]?.price}</td>
        </tr>
      )}
    </>
  );
}

export default AboutHotel;
