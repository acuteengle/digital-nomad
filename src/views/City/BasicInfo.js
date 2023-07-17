import React from "react";
import dayjs from "dayjs";

export const BasicInfo = ({ cityData }) => {

  if (!cityData) return null;

  const { city, country, arrivalDay, departureDay, housing, spending } = cityData;

  const startDate = dayjs(arrivalDay);
  const endDate = dayjs(departureDay);
  const weeks = Math.ceil(endDate.diff(startDate, 'weeks', true));

  return (
    <>
      <h1>{`${city}, ${country}`}</h1>
      <h3 className="spaceTop">Length of stay</h3>
      <p className="indent">{`${weeks} weeks`}</p>
      <p className="indent">{`(${startDate.format('MMM YYYY')} - ${endDate.format('MMM YYYY')})`}</p>
      <h3 className="spaceTop">Monthly cost</h3>
      <p className="indent">
        {`Housing: $${housing}`}
      </p>
      <p className="indent">
        {`Spending: $${spending}`}
      </p>
      <p className="indent">
        {`Total: $${housing + spending}`}
      </p>
    </>
  )
};