export const stringifyConverter = (arg: unknown): string => {
  if (typeof arg !== "string") return JSON.stringify(arg);
  return arg;
};

export const parseConverter = <T>(arg: unknown): T => {
  if (typeof arg === "string") return JSON.parse(arg) as T;
  return arg as T;
};

export const getBoolean = (bool: string): boolean | null => {
  if (bool === "true") return true;
  if (bool === "false") return false;
  return null;
};
