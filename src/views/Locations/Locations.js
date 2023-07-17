import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { LOCATIONS } from "AppConstants";

export const Locations = () => {
  const navigate = useNavigate();
  return (
    <Container className="pageContainer">
      <h1 className="pageTitle">My Journey</h1>
      <p>(most recent at the top)</p>
      <Timeline position="alternate">
        {LOCATIONS.map((location, index) => {
          return (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                {index !== LOCATIONS.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                {typeof location === 'object' ? (
                  <p className="clickable" onClick={() => navigate(`/city/${location.key}`)}>{`${location.city}, ${location.country}`}</p>
                ) : (
                  <h3>{location}</h3>
                )}
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Container >
  )
}