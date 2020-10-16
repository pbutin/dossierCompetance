import React from 'react';

const HomePage = (props) => {

  const parseAndFormat = (date) => {
    const parsedDate = Date.parse(date);
    return new Intl.DateTimeFormat("fr-FR", {
          year: "2-digit",
          month: "2-digit"
        }).format(parsedDate);
  };

  if (props.debut === "") {
    return null;
  }
  return <p>{parseAndFormat(props.debut)} - {parseAndFormat(props.fin)}</p>
}

export default HomePage;