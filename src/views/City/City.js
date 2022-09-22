import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { LOCATIONS } from 'AppConstants';

export const City = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { cityId } = params;

  const [cityData, setCityData] = useState(null);

  console.log("cityData", cityData);

  useEffect(() => {
    const data = LOCATIONS.find(location => location.key === cityId);

    if (!data) {
      navigate("/NotFound");
    }
    else {
      setCityData(data);
    }

  }, [cityId, navigate]);

  console.log("params", params);
  return (
    <div>hello</div>
  )
};