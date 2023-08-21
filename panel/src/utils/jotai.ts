import "client-only";

import { atom } from "jotai";

import { isClient } from "./next";

export const persistenceAtom = <T>(key: string, initialValue: T) => {
  const getInitialValue = (): T => {
    if (!isClient) return initialValue;

    const item = localStorage.getItem(key);

    if (item !== null) {
      return JSON.parse(item) as T;
    }

    return initialValue;
  };

  const baseAtom = atom(getInitialValue());

  const derivedAtom = atom<T, [((arg: T) => T) | T], void>(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = checkIsCallbackType(update) ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    },
  );

  return derivedAtom;
};

export const sessionPersistenceAtom = <T>(key: string, initialValue: T) => {
  const getInitialValue = (): T => {
    if (!isClient) return initialValue;

    const item = sessionStorage.getItem(key);

    if (item !== null) {
      return JSON.parse(item) as T;
    }

    return initialValue;
  };

  const baseAtom = atom(getInitialValue());

  const derivedAtom = atom<T, [((arg: T) => T) | T], void>(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = checkIsCallbackType(update) ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      sessionStorage.setItem(key, JSON.stringify(nextValue));
    },
  );

  return derivedAtom;
};

const checkIsCallbackType = <T>(arg: T | ((arg: T) => T)): arg is (arg: T) => T => {
  return typeof arg === "function";
};
