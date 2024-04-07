import useLocalStorage from "hooks/useLocalStorage";
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from './SearchHistory.module.less'
import { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";
import useWindowSize from "hooks/useWindowSize";
import { formatDate } from "utils/date";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchHistory = ({ onSearch }: Props) => {
  const { darkTheme } = useContext(ThemeContext);
  const { width } = useWindowSize();

  const [value, setValue] = useLocalStorage('historyItems');

  return <section className={`${styles.history_container} ${darkTheme ? styles.history_container_dark : styles.history_container_light}`}>
    <p>Search History</p>
    <div className={styles.content_container}>
      {value?.map((v) => 
      <div className={`${styles.content_row} ${darkTheme ? styles.content_row_dark : styles.content_row_light}`} key={v.id}>
        {width <= 500 ? 
        <div className={styles.left_content}>
          <div>{v.searchText}</div>
          <div className={styles.left_content_date}>{formatDate(new Date(v.date))}</div>
        </div> 
        : 
        <div className={styles.left_content}>{v.searchText}</div>
        }
        <div className={styles.right_content}>
          {width > 500 && <div className={styles.right_content_date}>{formatDate(new Date(v.date))}</div>
          }
          <i onClick={() => onSearch(v.searchText)}><FaSearch /></i>
          <i onClick={() => {
            setValue(value.filter((item) => item.id !== v.id))
          }}><MdDelete /></i>
        </div>
      </div>)}
    </div>
  </section>
}

export default SearchHistory