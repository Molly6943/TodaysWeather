import { useState, useEffect } from 'react';

export interface HistoryItmes {
  id: number
  searchText: string;
  date: Date;
}

export default function useLocalStorage(key:string): [HistoryItmes[] | undefined, (value: HistoryItmes[]) => void] {
  const [value, setValue] = useState(() => {
    const defaultValue = [{ id: Math.floor(Math.random() * 1000) + 1, searchText:'singapore', date: new Date()}]

    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue];
}
