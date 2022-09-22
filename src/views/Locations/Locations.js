import React from "react";
import { Container } from "react-bootstrap";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { LOCATIONS } from "AppConstants";

export const Locations = () => (
  <Container className="pageContainer">
    <h1 className="pageTitle">Locations</h1>
    <p>(most recent at the top)</p>
    <Timeline position="alternate">
      {LOCATIONS.map(({ city, country, arrivalDay, departureDay }, index) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            {index !== LOCATIONS.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <p>{`${city}, ${country}`}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Container>
);