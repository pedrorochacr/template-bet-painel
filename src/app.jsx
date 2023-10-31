import React from 'react';
import Main from './components/main';
import './app.sass';
import './fonts.sass';
import ThemeContextParent from './contexts/themeContext';

function App() {
  return (
    <ThemeContextParent>
      <Main />
    </ThemeContextParent>
  );
}

export default App;
