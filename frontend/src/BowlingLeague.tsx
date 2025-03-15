import { useEffect, useState } from 'react';
import { bowling } from './types/bowling';

function BowlingLeague() {
  const [bowlers, setBowlers] = useState<bowling[]>([]);

  // Get data
  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch('https://localhost:5000/api/BowlingLeague'); // put link here
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowler();
  }, []);

  // creates and returns table
  return (
    <>
      <h2>Bowlers</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Team Name</td>
            <td>Street Address</td>
            <td>City</td>
            <td>State</td>
            <td>Zip</td>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingLeague;
