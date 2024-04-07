import { useContext } from 'react'
import styles from './WeatherInfo.module.less'
// import cloudImg from '@assets/cloud.png'
import ThemeContext from '../../../contexts/ThemeContext'
import sunImg from '@assets/sun.png'
import useWeather from '../../../hooks/useWeather'
import { WeatherQuery } from '../index'
import useWindowSize from '../../../hooks/useWindowSize'
import { formatDate } from '../../../utils/date'

interface Props {
  weatherQuery: WeatherQuery;
}

const WeatherInfo = ({ weatherQuery }: Props) => {
  const { width } = useWindowSize();
  const { darkTheme } = useContext(ThemeContext)
  const { data, error } = useWeather(weatherQuery)

  // console.log('data====>', data)
  if (error) return <div className={styles.error}>{error}</div>;

  return <section className={`${styles.container} ${darkTheme ? styles.container_dark : styles.container_light}`}>
    <img className={styles.image} src={sunImg} alt="image" />
    <div className={styles.app_name}>Today's Weather</div>
    <h1>{data.main?.feels_like}°</h1>
    <span>H: {data.main?.humidity}° L: {data.clouds?.all}°</span>
    {width <= 430 ?
      <div className={styles.weather_detail_small}>
        <div className={styles.left}>
          <strong>{data.name}</strong>
        </div>
        <div className={styles.right}>
          <span>{data.weather ? data.weather[0]?.main ? data.weather[0]?.main : '' : ''}</span>
          <span>Humidity: {data.main?.humidity}</span>
          <span>{data.dt}</span>
        </div>
      </div>
      : <div className={styles.weather_detail}>
        <strong>{data.name}</strong>
        <span>{formatDate(new Date((data.dt + data.timezone) * 1000))}</span>
        <span>Humidity: {data.main?.humidity}</span>
        <span>{data.weather ? data.weather[0]?.main ? data.weather[0]?.main : '' : ''}</span>
      </div>}
  </section>
}

export default WeatherInfo