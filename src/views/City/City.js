import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { LOCATIONS } from 'AppConstants';
import { Loader } from 'components/Loader';
import { MediaModal } from 'components/MediaModal';

export const City = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { cityId } = params;

  const [cityData, setCityData] = useState(null);
  const [modalLink, setModalLink] = useState(null);

  useEffect(() => {

    const data = LOCATIONS.find(location => location.key === cityId);

    if (!data) {
      navigate("/NotFound");
    }
    else {
      setTimeout(() => {
        setCityData(data);
      }, 500);
    }

  }, [cityId, navigate]);

  if (!cityData) return <Loader />;

  const { city, country, arrivalDay, departureDay, housing, spending, map, video, blogPost, personalInstagramPost, photosPost, dancePost } = cityData;

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
        <p className="indent clickable" onClick={() => setModalLink(video)}>recap</p>
      }
      {blogPost &&
        <p className="indent"><a href={blogPost} target="_blank" rel="noreferrer">blog</a></p>
      }
      {personalInstagramPost &&
        <p className="indent clickable" onClick={() => setModalLink(personalInstagramPost)}>post</p>
      }
      {photosPost &&
        <p className="indent clickable" onClick={() => setModalLink(photosPost)}>pics</p>
      }
      {dancePost &&
        <p className="indent clickable" onClick={() => setModalLink(dancePost)}>dance</p>
      }
      <MediaModal show={modalLink} onHide={() => setModalLink(null)} modalLink={modalLink} />
    </Container >
  )
};