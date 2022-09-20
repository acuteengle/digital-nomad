import React from "react";
import dayjs from "dayjs";
import { Container } from "react-bootstrap";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { LOCATIONS } from "AppConstants";

export const Locations = () => {
  return (
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
            <TimelineContent><div>
              <p>{`${dayjs(arrivalDay).format('MMM YYYY')} - ${dayjs(departureDay).format('MMM YYYY')}`}</p>
              <p>{`${city}, ${country}`}</p>
            </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
};