import './App.css';
import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './themes';
import {GlobalStyles} from './global';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
      <h1>Switching themes</h1>
      <button onClick={toggleTheme}>Switch theme</button>
      </>
    </ThemeProvider>
  );
}

export default App;
