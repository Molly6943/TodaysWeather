import { useContext } from 'react'
import ThemeContext from 'contexts/ThemeContext'

import styles from './WeatherInfo.module.less'
import cloudImg from 'assets/cloud.png'
import sunImg from 'assets/sun.png'
import useWeather from 'hooks/useWeather'
import useWindowSize from 'hooks/useWindowSize'
import { formatDate } from 'utils/date'
import { kelvinToCelsius } from 'utils/temperature'
import { WeatherQuery } from '../index'

interface Props {
  weatherQuery: WeatherQuery;
}

const WeatherInfo = ({ weatherQuery }: Props) => {
  const { width } = useWindowSize();
  const { darkTheme } = useContext(ThemeContext)
  const { data, error } = useWeather(weatherQuery)

  if (error) return <div className={styles.error}>{error}. Probably because you didn't enter a valid city/country name</div>;

  return <section className={`${styles.container} ${darkTheme ? styles.container_dark : styles.container_light}`}>
    <img className={styles.image} src={data.weather ? data.weather[0]?.main === 'Clouds' ? cloudImg : sunImg : sunImg} alt="image" />
    <div className={styles.app_name}>Today's Weather</div>
    <h1>{kelvinToCelsius(data.main?.feels_like)}°</h1>
    <span>H: {data.main?.humidity}° L: {data.clouds?.all}°</span>
    {width <= 480 ?
      <div className={styles.weather_detail_small}>
        <div className={styles.left}>
          <strong>{data.name}</strong>
        </div>
        <div className={styles.right}>
          <span>{data.weather ? data.weather[0]?.main ? data.weather[0]?.main : '' : ''}</span>
          <span>Humidity: {data.main?.humidity}%</span>
          <span>{formatDate(new Date((data.dt + data.timezone) * 1000))}</span>
        </div>
      </div>
      : <div className={styles.weather_detail}>
        <strong>{data.name}</strong>
        <span>{formatDate(new Date((data.dt + data.timezone) * 1000))}</span>
        <span>Humidity: {data.main?.humidity}%</span>
        <span>{data.weather ? data.weather[0]?.main ? data.weather[0]?.main : '' : ''}</span>
      </div>}
  </section>
}

export default WeatherInfo