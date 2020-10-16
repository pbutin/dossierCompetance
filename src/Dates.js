import React from 'react';

const Dates = (props) => {
  const startDate = props.dates.debut;
  const endDate = props.dates.fin;

  const format = (date) => {
    return new Intl.DateTimeFormat("fr-FR", {
          year: "numeric",
          month: "long"
        }).format(Date.parse(date))
  };

  const duration = (startDate, endDate) => {
    return new Intl.DateTimeFormat("fr-FR", {
          month:"numeric"
        }).format(Math.abs(Date.parse(endDate) - Date.parse(startDate)));
  };

  if(startDate === "") {
    return null;
  }
  return (
    <div className="block border padding15">
      <h4>Durée: {duration(startDate, endDate)} MOIS</h4>
      <p>De {format(startDate)}</p>
      <p>À {format(endDate)}</p>
    </div>
  );
}

export default Dates;