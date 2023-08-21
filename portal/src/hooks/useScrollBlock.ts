import { useCallback } from "react";

import { isClient } from "@/utils/next";

interface ReturnUseScrollBlock {
  block(): void;
  unBlock(): void;
}

const useScrollBlock = (): ReturnUseScrollBlock => {
  const handler = (e: Event) => {
    e.stopPropagation();
    return false;
  };

  const block = useCallback(() => {
    if (!isClient) return;

    const body = document.getElementsByTagName("body")[0];
    if (body) {
      body.style.overflow = "hidden";
      body.addEventListener("touchmove", handler);
    }
  }, []);

  const unBlock = useCallback(() => {
    if (!isClient) return;

    const body = document.getElementsByTagName("body")[0];
    if (body) {
      body.style.overflow = "visible";
      body.removeEventListener("touchmove", handler);
    }
  }, []);

  return {
    block,
    unBlock,
  };
};

export default useScrollBlock;
