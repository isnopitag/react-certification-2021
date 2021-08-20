import React from 'react';

export const Button = ({ testing }) => {
  return (
    <>
      <button onClick={() => testing()}>TEST</button>
    </>
  );
};
