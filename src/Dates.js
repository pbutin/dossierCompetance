import React from 'react';

const Dates = (props) => {
  const startDate = Date.parse(props.dates.debut);
  const endDate = Date.parse(props.dates.fin);

  const format = (date) => {
    return new Intl.DateTimeFormat("fr-FR", {
          year: "numeric",
          month: "long"
        }).format(date)
  };

  const duration = (startDate, endDate) => {
    return new Intl.DateTimeFormat("fr-FR", {
          month:"numeric"
        }).format(Math.abs(endDate - startDate));
  };

  return (
    <div className="block">
      <h4>Durée:</h4>
      <h5>{duration(startDate, endDate)} MOIS</h5>
      <p>De {format(startDate)}</p>
      <p>À {format(endDate)}</p>
    </div>
  );
}

export default Dates;