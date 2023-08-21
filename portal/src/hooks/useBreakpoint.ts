import { useWindowSize } from "react-use";

interface UseBreakPointArgs<T> {
  maxValue: T;
  minValue: T;
  breakpoint: number;
}

type ReturnUseBreakPoint<T> = T;

type UseBreakPoint = <T>(props: UseBreakPointArgs<T>) => ReturnUseBreakPoint<T>;

const useBreakPoint: UseBreakPoint = ({ breakpoint, maxValue, minValue }) => {
  const { width: windowWidth } = useWindowSize();

  if (windowWidth >= breakpoint) return maxValue;
  return minValue;
};

export default useBreakPoint;
