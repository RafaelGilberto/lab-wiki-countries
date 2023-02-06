import { useParams } from 'react-router-dom';

export function CountryDetails(props) {
  const params = useParams();
  const info = props.countries.filter((currentElement) => {
    return currentElement.alpha3Code === params.id;
  })[0];

  return (
    <div class="position-absolute top-70 start-50 text-bg-light">
      <div>{info.name.common}</div>
      <div>
        <p>Capital : {info.capital}</p>
        <p>Area : {info.area} km^2</p>
        <p>
          Borders:{' '}
          {info.borders.map((currentBorder) => {
            return <span>{currentBorder + ' '}</span>;
          })}{' '}
        </p>
      </div>
    </div>
  );
}
