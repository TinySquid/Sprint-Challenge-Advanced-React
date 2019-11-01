import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Display from './components/Display';

test('Renders without crashing', () => {
  rtl.render(<App />);
});

test('Display renders data correctly', () => {
  const doc = rtl.render(<Display data={[
    { name: "Alex Morgan", country: "United States", searches: 100 },
    { name: "Wendie Renard", country: "France", searches: 7 }
  ]} />);

  const name = doc.getByText('Alex Morgan');
  const country = doc.getByText('United States');
  const searches = doc.getByText('100');

  expect(name).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(searches).toBeInTheDocument();
})

