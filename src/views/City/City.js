import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { LOCATIONS } from 'AppConstants';
import { Loader } from 'components/Loader';
import { MediaModal } from 'components/MediaModal';
import { BasicInfo } from "./BasicInfo";

export const City = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { cityId } = params;

  const [cityData, setCityData] = useState(null);
  const [modalLink, setModalLink] = useState(null);

  useEffect(() => {

    const data = LOCATIONS.find(location => typeof location === 'object' && location.key === cityId);

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

  const { map, video, blogPost, personalInstagramPost, photosPost, dancePost } = cityData;

  return (
    <Container className="pageContainer">
      <p className="backLink" onClick={() => navigate('/')}>&larr; back</p>
      <BasicInfo cityData={cityData} />
      <h3 className="spaceTop">Links</h3>
      {map &&
        <p className="indent clickable" onClick={() => setModalLink(map)}>recs</p>
      }
      {video &&
        <p className="indent clickable" onClick={() => setModalLink(video)}>recap video</p>
      }
      {blogPost &&
        <p className="indent"><a href={blogPost} target="_blank" rel="noreferrer">blog post</a></p>
      }
      {personalInstagramPost &&
        <p className="indent clickable" onClick={() => setModalLink(personalInstagramPost)}>instagram post</p>
      }
      {photosPost &&
        <p className="indent clickable" onClick={() => setModalLink(photosPost)}>photos</p>
      }
      {dancePost &&
        <p className="indent clickable" onClick={() => setModalLink(dancePost)}>dance video</p>
      }
      <MediaModal show={modalLink} onHide={() => setModalLink(null)} modalLink={modalLink} />
    </Container >
  )
};