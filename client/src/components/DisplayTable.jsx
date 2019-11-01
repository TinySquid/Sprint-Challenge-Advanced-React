import React from 'react';

const DisplayTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Search Score</th>
        </tr>
      </thead>
      <tbody>
        {data.length && data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.name}</td>
            <td>{row.country}</td>
            <td>{row.searches}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DisplayTable;
