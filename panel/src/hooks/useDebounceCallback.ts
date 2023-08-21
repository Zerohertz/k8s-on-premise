import { useMemo, useRef } from "react";

import { debounce, type DebouncedFunc } from "lodash-es";

const useDebounceCallback = <T extends unknown[]>(cb: (...args: T) => void, delay = 300) => {
  const cbRef = useRef(cb);
  cbRef.current = cb;

  return useMemo<DebouncedFunc<(...args: T) => void>>(
    () =>
      debounce((...args: T) => cbRef.current(...args), delay, {
        leading: false,
        trailing: true,
      }),
    [delay],
  );
};

export default useDebounceCallback;
