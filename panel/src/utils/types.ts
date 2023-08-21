export type Nullable<T> = T extends object
  ? T extends unknown[]
    ? T | null
    : { [K in keyof T]: Nullable<T[K]> }
  : T | null;

export type NotNullable<T> = T extends object ? { [K in keyof T]: NotNullable<T[K]> } : NonNullable<T>;
