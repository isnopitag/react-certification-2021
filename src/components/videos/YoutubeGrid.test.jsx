import React from 'react';
import { render, screen } from '@testing-library/react';
import { YoutubeGrid } from './YoutubeGrid';

test('Renders Loading text before fetching data', () => {
  const search = 'Wizeline';
  const view = false;
  const setView = () => {};
  render(<YoutubeGrid search={search} view={view} setView={setView} />);
  const loading = screen.getByText(/LOADING/i);
  expect(loading).toBeInTheDocument();
});
