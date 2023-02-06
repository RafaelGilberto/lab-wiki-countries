import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function CountryDetails(props) {
  const params = useParams();
  const info = props.countries.filter((currentElement) => {
    return currentElement.alpha3Code === Number(params.id);
  });

  return (
    <>
      <div>{info.name.common}</div>
      <div>
        <p>Capital : {info.capital}</p>
        <p>Area : {info.area}</p>
        {info.borders.map((currentBorder) => {
          <p>{currentBorder}</p>;
        })}
      </div>
    </>
  );
}
