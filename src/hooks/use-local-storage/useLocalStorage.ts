import { useState } from 'react';

const useLocalStorage = (key: string, def: any[]) => {
  const storedData = JSON.parse(localStorage.getItem(key) ?? '[]');
  const [data, setData] = useState<any[]>(
    Array.isArray(storedData) && storedData.length ? storedData : def
  );
  const update = (data: any[]) => {
    const updatedData = data.length ? data : def;
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  return { data, update };
};

export default useLocalStorage;
