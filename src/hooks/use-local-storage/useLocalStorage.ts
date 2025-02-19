import { useState } from 'react';

function useLocalStorage<Type = any>(
  key: string,
  def: Type[],
  reconstruct: (stored: Type) => Type
) {
  function checkType(def: any[], data: any[]): boolean {
    const defType = typeof def;
    const dataType = typeof data;
    if (defType !== dataType) return false;
    if (defType !== 'object') return true;
    const defKeys = Object.keys(def).sort();
    const dataKeys = Object.keys(data).sort();
    for (let i = 0; i < defKeys.length; i++) {
      if (
        defKeys[i] !== dataKeys[i] ||
        typeof def[0][defKeys[i]] !== typeof data[0][dataKeys[i]]
      )
        return false;
    }
    return true;
  }

  const storageData = JSON.parse(localStorage.getItem(key) ?? '[]');
  const storedData: Type[] = Array.isArray(storageData) ? storageData : [];
  for (let i = 0; i < storedData.length; i++) {
    storedData[i] = reconstruct(storedData[i]);
  }
  const [data, setData] = useState<Type[]>(
    Array.isArray(storedData) && storedData.length && checkType(def, storedData)
      ? storedData
      : def
  );
  const update = (data: Type[]) => {
    const updatedData = data.length && checkType(def, data) ? data : def;
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  return { data, update };
}

export default useLocalStorage;
