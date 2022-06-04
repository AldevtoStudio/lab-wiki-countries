import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            to={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
            key={country.alpha3Code}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common} Flag`}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
