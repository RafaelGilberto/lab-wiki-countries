import countries from './countries.json';
import { NavBar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
