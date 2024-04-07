// import { useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchHistory = ({ onSearch }: Props) => {
  const [value, setValue] = useLocalStorage('historyItems');
//   useEffect(() => {  
//     const aaa = JSON.parse(localStorage.getItem('historyItems') || '')
//     console.log('===?', 'update',aaa )
// }, [onSearch])

  return <section>
    <p>Search History</p>
    <div>
      {value?.map((v) => <div key={v.id}>
        <div>{v.searchText}</div>
        <div>
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