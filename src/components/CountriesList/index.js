import { Link } from 'react-router-dom';

export function CountriesList(props) {
  return (
    <div className="flex-md-column">
      {props.countries.map((currentElement) => {
        return (
          <Link to={`/${currentElement.alpha3Code}`}>
            <div>{currentElement.name.common}</div>
          </Link>
        );
      })}{' '}
    </div>
  );
}
