export function arrObjectKeys<T extends object>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj).map(
    (key) => key as unknown as keyof T
  );
}
