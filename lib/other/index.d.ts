/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
* Make all properties in T required
*/
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
* Make all properties in T readonly
*/
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
* From T, pick a set of properties whose keys are in the union K
*/
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
* Construct a type with a set of properties K of type T
*/
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
* Exclude from T those types that are assignable to U
*/
type Exclude<T, U> = T extends U ? never : T;

/**
* Extract from T those types that are assignable to U
*/
type Extract<T, U> = T extends U ? T : never;

/**
* Construct a type with the properties of T except for those in type K.
*/
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
