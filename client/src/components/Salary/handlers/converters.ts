export function getObjKeys<T extends object>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj).map(
    (key) => key as unknown as keyof T
  );
}
