import React, { useContext, useEffect, useState } from 'react';
import './styles.sass';
import { useTemplateVal } from '@dsplay/react-template-utils';
import { ThemeContext } from '../../contexts/themeContext';

function Main() {
  const { globalTheme } = useContext(ThemeContext);
  const backgroundColor = globalTheme.backgroundColor ? globalTheme.backgroundColor : '#ffff';
  const fontColor = globalTheme.fontColor ? globalTheme.fontColor : '#020502';
  const logo = useTemplateVal('logo');
  return (
    <>
      <div>
         <div className='imageArea'>
            <img src={logo}></img>
         </div>
         <div className='betsInformations' style={{ backgroundColor: backgroundColor, color: fontColor }}>
              <h4>Bolão</h4>
              <h1>Jogo: 1</h1>
              <h1>Cotas: 1</h1>
              <h1>Valor: 1</h1>
              <h1>Texto: 1</h1>
          </div>
      </div>
    </>
  );
}

export default Main;
