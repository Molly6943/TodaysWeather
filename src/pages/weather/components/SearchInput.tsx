import { useContext, useRef } from "react";

import styles from './SearchInput.module.less'
import { FaSearch } from "react-icons/fa";
import ThemeContext from "../../../contexts/ThemeContext";
import useLocalStorage from "../../../hooks/useLocalStorage";

interface WeatherQuery {
  q: string | null;
}
interface Props {
  onSearch: (searchText: string) => void;
  weatherQuery: WeatherQuery
}

const SearchInput = ({ weatherQuery, onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { darkTheme } = useContext(ThemeContext)
  const [value, setValue] = useLocalStorage('historyItems');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value)
      if (value) {
        setValue([{ id: Math.floor(Math.random() * 1000) + 1, searchText: ref.current.value, date: new Date() }, ...value])
      } else {
        setValue([{ id: Math.floor(Math.random() * 1000) + 1, searchText: ref.current.value, date: new Date() }])
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.input_box_base} ${darkTheme ? styles.input_box_dark : styles.input_box_light}`}>
        <span>Country</span>
        <input
          defaultValue={weatherQuery.q || 'singapore'}
          ref={ref}
        />
        <button className={`${styles.icon_light}, ${styles.icon}`}><FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
