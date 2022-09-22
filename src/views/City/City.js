import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { LOCATIONS } from 'AppConstants';
import { Loader } from 'components/Loader';

export const City = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { cityId } = params;

  const [cityData, setCityData] = useState(null);

  useEffect(() => {

    const data = LOCATIONS.find(location => location.key === cityId);

    if (!data) {
      navigate("/NotFound");
    }
    else {
      setTimeout(() => {
        setCityData(data);
      }, 1000);
    }

  }, [cityId, navigate]);

  if (!cityData) return <Loader />;

  const { city, country, arrivalDay, departureDay, housing, spending, map, video, personalInstagramPost, photosPost, dancePost } = cityData;

  const startDate = dayjs(arrivalDay);
  const endDate = dayjs(departureDay);
  const weeks = endDate.diff(startDate, 'weeks');

  return (
    <Container className="pageContainer">
      <h1>{`${city}, ${country}`}</h1>
      <h3 className="spaceTop">"Dates"</h3>
      <p className="indent">{`${startDate.format('MMM YYYY')} - ${endDate.format('MMM YYYY')}`}</p>
      <p className="indent">{`(${weeks} weeks)`}</p>
      <h3 className="spaceTop">"Costs (monthly)"</h3>
      <p className="indent">
        {`$${housing} (housing)`}
      </p>
      <p className="indent">
        {`$${spending} (spending)`}
      </p>
      <p className="indent">
        {`$${housing + spending} (total)`}
      </p>
      <h3 className="spaceTop">"Links"</h3>
      {map &&
        <p className="indent"><a href={map} target="_blank" rel="noreferrer">recs</a></p>
      }
      {video &&
        <p className="indent"><a href={video} target="_blank" rel="noreferrer">recap</a></p>
      }
      {personalInstagramPost &&
        <p className="indent"><a href={personalInstagramPost} target="_blank" rel="noreferrer">post</a></p>
      }
      {photosPost &&
        <p className="indent"><a href={photosPost} target="_blank" rel="noreferrer">pics</a></p>
      }
      {dancePost &&
        <p className="indent"><a href={dancePost} target="_blank" rel="noreferrer">dance</a></p>
      }
    </Container >
  )
};