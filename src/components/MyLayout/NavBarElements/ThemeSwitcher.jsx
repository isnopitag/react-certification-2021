import React from 'react';
import styled from 'styled-components';
import { backgroundColorText } from '../Colors';

export const ThemeSwitcher = () => {
  const ThemeSwitch = styled.div`
    color: #ffffff;
    cursor: pointer;
    display: grid;
    fill: ${backgroundColorText};
    font-size: 0.9rem;
    height: 50px;
    grid-template-columns: 100px 100px;
    margin: 5px;
    text-decoration: none;
    transition: all 0.3s ease-in;

    @media (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      max-height: 300px
      transition: max-height 0.3s ease-in;
      width: 100%;
    }

    h4{
        left: 50%;
        top: 50%;
    }
  `;

  const Switch = styled.label`
    height: 34px;
    left: 25%;
    position: relative;
    top: 25%;
    width: 60px;

    input {
      height: 0;
      opacity: 0;
      width: 0;
    }
    span {
      background-color: #113449;
      border-radius: 34px;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: 0.4s;
      -webkit-transition: 0.4s;
    }

    span:before {
      background-color: white;
      border-radius: 50%;
      bottom: 4px;
      content: '';
      height: 26px;
      left: 4px;
      position: absolute;
      transition: 0.4s;
      -webkit-transition: 0.4s;
      width: 26px;
    }

    input:checked + span {
      background-color: #113449;
    }

    input:focus + span {
      box-shadow: 0 0 1px #113449;
    }

    input:checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  `;

  return (
    <>
      <ThemeSwitch>
        <Switch>
          <input type="checkbox" />
          <span />
        </Switch>
        <h4>Dark Mode</h4>
      </ThemeSwitch>
    </>
  );
};
