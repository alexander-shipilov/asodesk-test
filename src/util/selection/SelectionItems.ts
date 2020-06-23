export class SelectionItems<T> {
  private readonly value: Set<T> = new Set<T>();

  constructor(value?: Set<T> | T[] | SelectionItems<T>) {
    if (value) {
      this.value = new Set<T>(value);
    }
  }

  get size(): number {
    return this.value.size;
  }

  * [Symbol.iterator](): IterableIterator<T> {
    yield* this.value[Symbol.iterator]();
  }

  * values(): IterableIterator<T> {
    yield* this.value.values();
  }

  has(item: T): boolean {
    return this.value.has(item);
  }

  add(item: T): this {
    let next = this;

    if (!this.has(item)) {
      const value = new Set<T>(this.value);

      value.add(item);
      next = new SelectionItems(value) as this;
    }

    return next;
  }

  delete(item: T): this {
    let next = this;

    if (this.has(item)) {
      const value = new Set<T>(this.value);

      value.delete(item);
      next = new SelectionItems(value) as this;
    }

    return next;
  }

  set(value: Set<T> | T[] | SelectionItems<T>): this {
    let next = this;

    if (value !== this) {
      const valueItems = [...value];

      if (valueItems.length !== this.size || valueItems.some((item) => !this.has(item))) {
        next = new SelectionItems(valueItems) as this;
      }
    }

    return next;
  }
}