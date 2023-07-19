import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { showCity } from '../../store/actions/citiesActions';

const useCities = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.citiesList);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    dispatch(showCity());
  };

  return {
    handleSearch,
    city,
    isButtonClicked,
  };
};

export default useCities;
