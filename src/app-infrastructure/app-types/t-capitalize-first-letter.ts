type TCapitalizeFirstLetter<T extends string> =
  T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : T;

export default TCapitalizeFirstLetter;
