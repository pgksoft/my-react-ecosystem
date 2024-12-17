class DefaultMap extends Map<string, number> {
  private defaultValue: number;

  constructor(defaultValue: number) {
    super();
    this.defaultValue = defaultValue;
  }

  get(key: string): number {
    return super.get(key) || this.defaultValue;
  }
}

export default DefaultMap;
