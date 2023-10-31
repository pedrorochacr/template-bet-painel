import React from 'react';
import { Loader } from '@dsplay/react-template-utils';
import Main from './components/main';
import LoaderCalendar from './components/loader-calendar';
import './app.sass';
import './fonts.sass';
import ThemeContextParent from './contexts/themeContext';

const MIN_LOADING_DURATION = 2000;

const fonts = [
  'Roboto Condensed',
];

function App() {
  return (
    <div className="container-home">
      <Loader
        placeholder={<LoaderCalendar />}
        minDuration={MIN_LOADING_DURATION}
        fonts={fonts}
      >
        <ThemeContextParent>
          <Main />
        </ThemeContextParent>
      </Loader>
    </div>
  );
}

export default App;
