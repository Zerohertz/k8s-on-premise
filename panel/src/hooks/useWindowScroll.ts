import { useEffect } from "react";

import { useRafState } from "react-use";

import { isClient } from "@/utils/next";

export interface State {
  x: number;
  y: number;
}

const useWindowScroll = (): State => {
  const [state, setState] = useRafState<State>(() => ({
    x: 0,
    y: 0,
  }));

  useEffect(() => {
    const handler = () => {
      setState((state) => {
        return state.x !== scrollX || state.y !== scrollY
          ? {
              x: scrollX,
              y: scrollY,
            }
          : state;
      });
    };

    if (isClient) handler();

    window.addEventListener("scroll", handler, { capture: false, passive: true });

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [setState]);

  return state;
};

export default useWindowScroll;
