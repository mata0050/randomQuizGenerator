import React from 'react';

const Alert = ({ msg, alertType }) => {
  return (
    <>
      <div className={`alert alert-${alertType}`}>{msg}</div>
    </>
  );
};

export default Alert;
