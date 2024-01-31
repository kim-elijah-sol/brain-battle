type Street = "n" | "s" | "w" | "e";

type Symbol = "r" | "g" | "b" | "y";

export type Piece = {
  street: Street[];
  symbol: Symbol | null;
};
