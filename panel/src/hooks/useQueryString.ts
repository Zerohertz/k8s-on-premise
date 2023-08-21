import { useCallback } from "react";

import { usePathname, useSearchParams } from "next/navigation";

type AppendArgs = Record<string, string | number>;
type SetArgs = Record<string, string | number>;

type GetCurrentParams = () => URLSearchParams;
type Append = (args: AppendArgs) => URLSearchParams;
type Set = (args: SetArgs) => URLSearchParams;
type GetQueryString = (args: URLSearchParams) => string;
type GetQueryStringWithPath = (query: URLSearchParams, path?: string) => string;
type Remove = (args: string[]) => URLSearchParams;

interface ReturnUseQueryString {
  getCurrentParams: GetCurrentParams;
  append: Append;
  set: Set;
  remove: Remove;
  getQueryString: GetQueryString;
  getQueryStringWithPath: GetQueryStringWithPath;
}

const useQueryString = (): ReturnUseQueryString => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getCurrentParams: GetCurrentParams = useCallback(() => {
    return new URLSearchParams(Array.from(searchParams.entries()));
  }, [searchParams]);

  const append: Append = useCallback(
    (args) => {
      const params = getCurrentParams();
      Object.entries(args).forEach(([key, value]) => params.append(key, String(value)));
      return params;
    },
    [getCurrentParams],
  );

  const set: Set = useCallback(
    (args) => {
      const params = getCurrentParams();
      Object.entries(args).forEach(([key, value]) => params.set(key, String(value)));
      return params;
    },
    [getCurrentParams],
  );

  const getQueryString: GetQueryString = useCallback((params) => {
    return `?${params.toString()}`;
  }, []);

  const getQueryStringWithPath: GetQueryStringWithPath = useCallback(
    (query, path) => {
      return `${path ?? pathname}${getQueryString(query)}`;
    },
    [getQueryString, pathname],
  );

  const remove: Remove = useCallback(
    (keys) => {
      const params = getCurrentParams();
      keys.forEach((key) => params.delete(key));
      return params;
    },
    [getCurrentParams],
  );

  return {
    getCurrentParams,
    append,
    set,
    remove,
    getQueryString,
    getQueryStringWithPath,
  };
};

export default useQueryString;
