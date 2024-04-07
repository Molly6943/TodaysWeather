import WeatherPage from './pages/weather'
import ThemeProvider from './contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <WeatherPage />
    </ThemeProvider>
  )
}

export default App
