import { CURRENT_DATE } from "../../../constants/alcoConstants";

type Auto<O extends object, V> = {
  [keys in keyof O]: V;
};

type C = Auto<typeof CURRENT_DATE, string>;
type V = Auto<C, number>;

export function converterStringToNumb(obj: C): V {
  const converted: any = {};
  for (const [key, val] of Object.entries(obj)) {
    converted[key] = Number(val);
  }
  return converted as any as V;
}
