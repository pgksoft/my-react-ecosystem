type TValueOf<T extends object> = T[keyof T];

export default TValueOf;
