import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function CountryDetails(props) {
  const params = useParams();
  const info = props.countries.filter((currentElement) => {
    return currentElement.alpha3Code === params.id;
  })[0];

  return (
    <>
      <div>{info.name.common}</div>
      <div>
        <p>Capital : {info.capital}</p>
        <p>Area : {info.area} km^2</p>
        {info.borders.map((currentBorder) => {
          <p>{currentBorder}</p>;
        })}
      </div>
    </>
  );
}
