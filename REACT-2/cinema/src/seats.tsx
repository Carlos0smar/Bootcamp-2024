import { useState, useEffect } from 'react';


type Seat = {
  id: number,
  row: number,
  column: number
  isReserved: boolean
}
const SeatGrid = ({ rows, columns }) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  
  const changeState = (id: number) => {
    const seatsUpdated: Seat[] = seats.map((seat) => {
      if (seat.id === id) {
        seat.isReserved = !seat.isReserved;
      }
      console.log(seat.id)
      return seat;
    });
    setSeats(seatsUpdated);
  }

  const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];
  useEffect(() => {
    const generateSeats = () => {
      const newSeats: Seat[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          newSeats.push({
            id: row * columns + col,
            row: row ,
            column: col ,
            isReserved: false
          });
        }
      }
      setSeats(newSeats);
    };
    generateSeats();
  }, [rows, columns]);

  return (
    <>
    <div className='card'>
        {seats.map((seat) => { 
          return <div key={seat.id}> 
            <p>{letter[seat.row]}{seat.column}</p>
            {seat.isReserved ? <img src='seatReserved.png' onClick={() => changeState(seat.id)}/> : <img src='seat.png' onClick={() => changeState(seat.id)}/>}
            </div>
            })}
    </div>
    </>
  );
};

export default SeatGrid;

