import React, { useState, useEffect } from 'react';

const NewPage = () => {
  const renderDiv = () => {
    const newDiv = (
      <div onClick={renderDiv}>
        <h1>Hİİ, Whats up??</h1>
      </div>
    );

    setDivArray([...divArray, newDiv]);
  };

  const [divArray, setDivArray] = useState([]);

  return (
    <>
      <div onClick={renderDiv}>
        <h1>Hİİ, Whats up??</h1>
      </div>
      {divArray.map(div => div)}
    </>
  );
};

export default NewPage;
