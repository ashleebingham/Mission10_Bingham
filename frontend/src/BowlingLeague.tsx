import { useEffect, useState } from 'react';
import { bowling } from './types/bowling';

function BowlingLeague() {
  const [bowlers, setBowlers] = useState<bowling[]>([]);

  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch('link'); // put link here
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowler();
  }, []);

  return (
    <>
      <h1>Bowlers</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.id}>
              <td>{b.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingLeague;
