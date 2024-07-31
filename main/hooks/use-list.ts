import { useState, useCallback } from 'react';
type List<T> = T[];

export function useList<T>(list: List<T>) {
  const [value, setValue] = useState<List<T>>(list);
  return {
    value,
    setValue,
    push: useCallback((item: T) => setValue(v => [...v, item]), []),
    updateAt: useCallback((i: number, item: T) => setValue(v => [...v].splice(i, 1, item)), []),
    clear: useCallback(() => setValue(() => []), []),
    // @ts-ignore
    removeBy: useCallback((key: string, value: any) => setValue(arr => arr.filter(v => v && v?.[key] !== value)), []),
    // @ts-ignore
    removeById: useCallback((value: any) => setValue(arr => arr.filter(v => v && v.id !== value)), []),
    removeIndex: useCallback((index: number) => setValue(arr => arr.filter((v, i) => i !== index)), []),
  };
}