import React, { useContext } from 'react';
import './styles.sass';
import { useTemplateVal, useMedia } from '@dsplay/react-template-utils';
import { ThemeContext } from '../../contexts/themeContext';

function Main() {
  const { globalTheme } = useContext(ThemeContext);
  const background = globalTheme.backgroundColor ? globalTheme.backgroundColor : '#ffff';
  const fontColor = globalTheme.fontColor ? globalTheme.fontColor : '#020502';
  const logo = useTemplateVal('logo');
  const {
    gameText, dozensText, quotasText, valueText, commentText,
  } = useMedia();
  return (
    <>
      <div className="app">
        <div className="imageArea">
          <img alt="Bet Information" src={logo} />
        </div>
        <div className="betsInformations" style={{ backgroundColor: background, color: fontColor }}>
          <h1>Bolão</h1>
          <span className="data">
            <h2>Jogo:</h2>
            <span>{' '}</span>
            <h2>{gameText}</h2>
          </span>
          <span className="data">
            <h2>Dezenas:</h2>
            <span>{' '}</span>
            <h2>{dozensText}</h2>
          </span>
          <span className="data">
            <h2>Cotas:</h2>
            <span>{' '}</span>
            <h2>{quotasText}</h2>
          </span>
          <span className="data">
            <h2>Valor:</h2>
            <span>{' '}</span>
            <h2>{valueText}</h2>
          </span>
          <span className="data">
            <h2>Texto:</h2>
            <span>{' '}</span>
            <h2>{commentText}</h2>
          </span>
        </div>
      </div>
    </>
  );
}

export default Main;
