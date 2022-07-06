import React, { useState, useEffect } from 'react';

export default function Main() {
  const [table, setTable] = useState([]);
  const [chosenCell, setChosenCell] = useState();

  const creatBoard = () => {
    const tableArray = [];

    setChosenCell(Math.floor(Math.random() * table.length));

    for (let i = 0; i < 64; i++) {
      if (i === chosenCell) {
        const cellColor = 'blue';
        tableArray.push(cellColor);
      } else {
        const cellColor = 'red';
        tableArray.push(cellColor);
      }
    }

    setTable(tableArray);
  };

  useEffect(() => {
    creatBoard();
  }, [chosenCell]);

  const handleChange = (event, index) => {

    if(index === chosenCell){
      setChosenCell(Math.floor(Math.random() * table.length));
    event.target.style.backgroundColor = 'red';
    }else{
      return
    }
    
  };

  return (
    <div className='app'>
      <div className='game' onClick={handleChange}>
        {table.map((cellColor, index) => (
          <img
            key={index}
            onClick={event => handleChange(event, index)}
            style={{ backgroundColor: cellColor }}
          />
        ))}
      </div>
    </div>
  );
}
