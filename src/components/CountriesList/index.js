export function CountriesList(props) {
  return (
    <div className="col-5">
      <div className="list-group">
        {props.countries.map((currentElement) => {
          return (
            <a
              class="list-group-item list-group-item-action"
              href={`/${currentElement.alpha3Code}`}
            >
              {currentElement.name.common}
            </a>
          );
        })}
      </div>
    </div>
  );
}
