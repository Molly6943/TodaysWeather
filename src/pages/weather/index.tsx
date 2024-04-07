import styles from './styles.module.less'
import SearchInput from './components/SearchInput'
import Switch from "react-switch";
import { useContext, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import WeatherInfo from './components/WeatherInfo';
import SearchHistory from './components/SearchHistory';

export interface WeatherQuery { 
  q: string | null;
}

const WeatherPage: React.FC = () => {
  const {darkTheme, dispatch} = useContext(ThemeContext)
  const [weatherQuery, setWeatherQuery] = useState<WeatherQuery>({} as WeatherQuery);
  
  const handleSearch = (q:string) => {
    setWeatherQuery({ ...weatherQuery, q })
  }

  return (
    <section className={`${styles.page_container} ${darkTheme ? styles.page_container_dark : styles.page_container_light}`}>
    <div className={styles.color_switch}>
      <span>Dark:</span>
      <Switch onChange={() => dispatch({
        type: 'SWITCH',
        darkTheme: !darkTheme
      })} checked={darkTheme} />
    </div>
    <section className={styles.main}>
      <header>
        <SearchInput weatherQuery={weatherQuery} onSearch={handleSearch} />
      </header>
      <main className={`${styles.weather_info} ${darkTheme ? styles.weather_info_dark : styles.weather_info_light}`}>
        <WeatherInfo weatherQuery={weatherQuery} />
        <section>
          <SearchHistory onSearch={handleSearch} />
        </section>
      </main>
    </section>
  </section>
  )
}

export default WeatherPage