export const isFunction = (something: unknown): something is CallableFunction => typeof something === 'function'

export const isDefined = <T extends any>(something: T | undefined): something is T => typeof something !== 'undefined'

export const isNumber = (something: unknown): something is number => typeof something === 'number'

export const objectEquals = <T extends Record<string, any>>(reference: T): ((compared: T) => boolean) => {
  const expectedKeys: Array<keyof T> = Object.keys(reference)
  return (compared) =>
    expectedKeys.length === Object.keys(compared).length &&
    expectedKeys.every((key) => compared[key] === reference[key])
}

type Indexer<T> = (item: T, index: number) => string
export const indexList = <T extends any>(list: T[], itemToKey = ((item) => item) as Indexer<T>) =>
  Object.fromEntries(list.map((item, index) => [itemToKey(item, index), item]))