import { render } from '@testing-library/react';
import React from 'react';
import { Hamburger } from './Hamburger';


const build = () => {

  const { container } = render(
      <Hamburger />
  );
  return {
    container,
  };
};

describe('Hamburger simple button', () => {
  it('render', () => {
    build();
  });
});


