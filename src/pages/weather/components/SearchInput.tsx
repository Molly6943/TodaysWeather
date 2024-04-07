import { useContext, useEffect, useRef } from "react";

import styles from './SearchInput.module.less'
import { FaSearch } from "react-icons/fa";
import ThemeContext from "contexts/ThemeContext";

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

  useEffect(() => {
    // Update the input's value when weatherQuery.q changes
    if (ref.current) {
      ref.current.value = weatherQuery.q || 'singapore';
    }
  }, [weatherQuery.q]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value)
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
