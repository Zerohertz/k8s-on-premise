import { useWindowSize } from "react-use";

import sizes from "@/styles/constants/sizes.module.scss";
import { getNumberFromPixel } from "@/utils/styles";

interface ReturnUseWindowSize {
  width: number;
  height: number;
}

// NOTE: 웹뷰에서 처음 로드할 때, window.innerWidth가 0으로 나오는 경우가 있어 width는 웬만하면 쓰지 않도록 하자..
const useContentWidth = (): ReturnUseWindowSize => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const contentMaxWidth = getNumberFromPixel(sizes.contentWidth);

  return {
    width: Math.min(windowWidth, contentMaxWidth),
    height: windowHeight,
  };
};

export default useContentWidth;
