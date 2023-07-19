import 'bootstrap/dist/css/bootstrap.css';

import { Button } from 'react-bootstrap';
import useCities from './hooks/useCities';

function Cities() {
  const { handleSearch, city, isButtonClicked } = useCities();
  return (
    <div>
      <Button onClick={handleSearch}>Find city</Button>
      {isButtonClicked && city ? (
        city.map((cityItem) => (
          <div key={cityItem.id}>
            <p> {cityItem.location.city}</p>
          </div>
        ))
      ) : (
        //   {Array.isArray(city) ? (
        //     city.map((cityItem) => (
        //       <div key={cityItem.id}>
        //         <p>Location: {cityItem.location.city}</p>
        //         {/* Render other properties of the city object */}
        //       </div>
        //     ))
        //   )
        <p>No cities available</p>
      )}
    </div>
  );
}

export default Cities;
