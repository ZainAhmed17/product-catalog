import { useState, useEffect, useRef } from 'react';

export const loadFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error('Error reading localStorage key', error);
    return defaultValue;
  }
};

export const saveToLocalStorage = <T,>(key: string, value: T) => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export function usePersistedState<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const isFirstRender = useRef(true);
  const defaultValueRef = useRef(defaultValue);

  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const persistedValue = loadFromLocalStorage(key, defaultValueRef.current);
      if (JSON.stringify(persistedValue) !== JSON.stringify(state)) {
        setState(persistedValue);
      }
    }
    isFirstRender.current = false;
  }, [key]);
  useEffect(() => {
    if (isFirstRender.current) return;

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(state));
      }
    } catch (err) {
      console.error('Error writing localStorage key', key, err);
    }
  }, [key, state]);

  return [state, setState];
}

export const clearStorage = () => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.removeItem('cart');
  } catch (error) {
    console.error('Error clearing localStorage', error);
  }
};
