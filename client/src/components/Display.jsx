import React from 'react'

const Display = ({ data }) => {
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
        {data.length !== 0 ? data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.name}</td>
            <td>{row.country}</td>
            <td>{row.searches}</td>
          </tr>
        )) : null}
        <tr>
          <td>Lieke Martens</td>
          <td>Netherlands</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>

  )
}

export default Display;
