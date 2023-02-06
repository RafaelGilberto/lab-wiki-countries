import { useParams } from 'react-router-dom';

export function CountryDetails(props) {
  const params = useParams();
  const info = props.countries.filter((currentElement) => {
    return currentElement.alpha3Code === params.id;
  })[0];

  return (
    <div className="col-7">
      <h1>{info.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital : </td>
            <td>{info.capital}</td>
          </tr>
          <tr>
            <td>Area :</td>
            <td>
              {info.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders:</td>
            <td>
              <ul>
                {info.borders.map((currentBorder) => {
                  const countryName = props.countries.filter((current) => {
                    return current.alpha3Code === currentBorder;
                  })[0];
                  return (
                    <li>
                      <a href="/AND">{countryName.name.common + ' '}</a>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
