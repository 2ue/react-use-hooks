import { useState, useCallback } from 'react';
type List<T> = T[];

export function useList<T>(list: List<T>) {
  const [value, setValue] = useState<List<T>>(list);
  const spliceArr = (i: number, item: T, replace?: boolean) => {
    setValue(v => {
      const newVal = [...v];
      newVal.splice(i, replace ? 1 : 0, item);
      return newVal;
    });
  };
  return {
    value,
    setValue,
    clear: useCallback(() => setValue(() => []), []),
    push: useCallback((item: T) => setValue(v => [...v, item]), []),
    insert: useCallback((i: number, item: T) => spliceArr(i, item), []),
    updateAt: useCallback((i: number, item: T) => spliceArr(i, item, true), []),
    // @ts-ignore
    removeBy: useCallback((key: string, value: any) => setValue(arr => arr.filter(v => v && v?.[key] !== value)), []),
    // @ts-ignore
    removeById: useCallback((value: any) => setValue(arr => arr.filter(v => v && v.id !== value)), []),
    removeIndex: useCallback((index: number) => setValue(arr => arr.filter((v, i) => i !== index)), []),
  };
}