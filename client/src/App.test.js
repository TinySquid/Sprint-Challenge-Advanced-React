import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import PopularityChart from './components/PopularityChart';
import Display from './components/Display';
import Theme from './components/Theme';

test('Renders without crashing', () => {
  rtl.render(<App />);
});

test('Display renders passed in data correctly', () => {
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
});

test('Theme switching works', () => {
  const doc = rtl.render(<Theme />)
  const toggle = doc.getByLabelText(/theme/i);

  expect(toggle.classList).toContain('toggle');

  rtl.fireEvent.click(toggle);

  expect(toggle.classList).toContain('toggled');

  expect(toggle).toBeInTheDocument();
});

test('localStorage hook works', () => {
  window.localStorage.removeItem('dark-mode');

  const doc = rtl.render(<Theme />)
  const toggle = doc.getByLabelText(/theme/i);

  rtl.fireEvent.click(toggle);

  const changedValue = JSON.parse(window.localStorage.getItem('dark-mode'));
  expect(changedValue).toBe(true);

});

test('Popularity chart renders correctly', () => {
  const mockData = [
    { 'name': 'Yeet Yeeterson', 'Search Score': 45 },
    { 'name': 'Jane Doe', 'Search Score': 32 }
  ]
  rtl.render(<PopularityChart data={mockData} />);
});
