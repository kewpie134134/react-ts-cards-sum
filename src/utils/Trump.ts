const OBJECT_OF_SPADE = {
  Spade_01: 1,
  Spade_02: 2,
  Spade_03: 3,
  Spade_04: 4,
  Spade_05: 5,
  Spade_06: 6,
  Spade_07: 7,
  Spade_08: 8,
  Spade_09: 9,
  Spade_10: 10,
  Spade_11: 11,
  Spade_12: 12,
  Spade_13: 13,
};

const OBJECT_OF_HEART = {
  Heart_01: 1,
  Heart_02: 2,
  Heart_03: 3,
  Heart_04: 4,
  Heart_05: 5,
  Heart_06: 6,
  Heart_07: 7,
  Heart_08: 8,
  Heart_09: 9,
  Heart_10: 10,
  Heart_11: 11,
  Heart_12: 12,
  Heart_13: 13,
};

const OBJECT_OF_CLOVER = {
  Clover_01: 1,
  Clover_02: 2,
  Clover_03: 3,
  Clover_04: 4,
  Clover_05: 5,
  Clover_06: 6,
  Clover_07: 7,
  Clover_08: 8,
  Clover_09: 9,
  Clover_10: 10,
  Clover_11: 11,
  Clover_12: 12,
  Clover_13: 13,
};

const OBJECT_OF_DIAMOND = {
  Diamond_01: 1,
  Diamond_02: 2,
  Diamond_03: 3,
  Diamond_04: 4,
  Diamond_05: 5,
  Diamond_06: 6,
  Diamond_07: 7,
  Diamond_08: 8,
  Diamond_09: 9,
  Diamond_10: 10,
  Diamond_11: 11,
  Diamond_12: 12,
  Diamond_13: 13,
};

// トランプマークの配列
export const ARRAY_OF_TRUMP = Object.keys(OBJECT_OF_SPADE)
  .concat(Object.keys(OBJECT_OF_HEART))
  .concat(Object.keys(OBJECT_OF_CLOVER))
  .concat(Object.keys(OBJECT_OF_DIAMOND));

// トランプマークと値のオブジェクト
export const OBJECT_OF_TRUMP: { [key: string]: number } = {
  ...OBJECT_OF_SPADE,
  ...OBJECT_OF_HEART,
  ...OBJECT_OF_CLOVER,
  ...OBJECT_OF_DIAMOND,
};
