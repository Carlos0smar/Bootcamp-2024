import { useState, useEffect } from 'react';


type Seat = {
    id: number,
    row: number,
    column: number
    isReserved: boolean
}
const SeatGrid = ({ rows, columns }) => {
  const [seats, setSeats] = useState<Seat[]>([]);

  useEffect(() => {
    const generateSeats = () => {
      const newSeats: Seat[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          newSeats.push({
            id: seats.length,
            row: row +1,
            column: col +1,
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
            return seat.isReserved ? <img src='./assets/seatReserved.png'/> : <img src='./assets/seat.png'/>
            })}
    </div>
    </>
  );
};

export default SeatGrid;