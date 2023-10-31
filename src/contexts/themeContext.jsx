/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { useTemplateVal } from '@dsplay/react-template-utils';

export const ThemeContext = createContext({
  globalTheme: {
    backgroundColor: '',
    fontColor: '',
  },
});

const ThemeContextParent = (props) => {
  const background = useTemplateVal('backgroundColor');
  const font = useTemplateVal('fontColor');

  const { children } = props;

  const value = {
    globalTheme: {
      primaryColor: backgroundColor,
      secondaryColor: fontColor,
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;
