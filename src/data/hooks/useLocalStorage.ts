"use client";
import { useCallback } from "react";

export default function useLocalStorage() {
  const get = useCallback((key: string) => {
    const localValue = window?.localStorage?.getItem(key);
    return localValue ? JSON.parse(localValue) : null;
  }, []);

  const set = useCallback((key: string, value: any) => {
    window?.localStorage?.setItem(key, JSON.stringify(value));
  }, []);

  return { get, set };
}
