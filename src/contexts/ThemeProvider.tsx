import { ReactNode, useReducer } from 'react';
import ThemeContext from './ThemeContext';

export interface ThemeAction {
  type: 'SWITCH'
  darkTheme: boolean
}

const themeReducer = (
  darkTheme: boolean,
  action: ThemeAction
): boolean => {
  switch (action.type) {
    case 'SWITCH':
      return !darkTheme;
    default:
      return darkTheme
  }
};

interface Props {
  children: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const [darkTheme, dispatch] = useReducer(themeReducer, false)

  return (
    <ThemeContext.Provider value={{ darkTheme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;