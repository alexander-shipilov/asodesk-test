declare const $prefix: unique symbol;

export type Prefixed<P extends string, T extends string> = { [$prefix]: P } & T;
