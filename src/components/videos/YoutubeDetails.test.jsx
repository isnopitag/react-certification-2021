import React from 'react';
import { render, screen } from '@testing-library/react';
import { YoutubeDetails } from './YoutubeDetails';

test('Renders Loading text before fetching data', () => {
  const id = 'nmXMgqjQzls';
  const item = {
    title: 'TEST',
    description: 'Description Test',
  };
  const funcs = () => {};
  render(<YoutubeDetails id={id} item={item} setView={funcs} setItem={funcs} />);
  const loading = screen.getByText(/LOADING/i);

  expect(loading).toBeInTheDocument();
});

test('Renders returns button ', () => {
  const id = 'nmXMgqjQzls';
  const item = {
    title: 'TEST',
    description: 'Description Test',
  };
  const funcs = () => {};
  render(<YoutubeDetails id={id} item={item} setView={funcs} setItem={funcs} />);
  const button = screen.getByTestId('button');

  expect(button).toBeInTheDocument();
});
