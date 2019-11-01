import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const PopularityChart = ({ data }) => {
  const formattedData = data.map(player => {
    return { 'name': player.name, 'Search Score': player.searches }
  });

  return (
    <div className="chart">
      <p>Top 10 Women's World Cup Players Ranked by Search Interest</p>
      <BarChart
        width={600}
        height={300}
        data={formattedData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Search Score" fill="dodgerblue" />
      </BarChart>
    </div>
  );
}

export default PopularityChart;
