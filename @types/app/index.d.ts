type Collection<TypeId extends string | number, T> = Record<TypeId, T>

interface Response<T> {
  result: T
}

interface Window {
  IS_DEV: boolean
}
