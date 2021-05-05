const OBJECT_OF_SPADE = {
  'S-1': 1,
  'S-2': 2,
  'S-3': 3,
  'S-4': 4,
  'S-5': 5,
  'S-6': 6,
  'S-7': 7,
  'S-8': 8,
  'S-9': 9,
  'S-10': 10,
  'S-11': 11,
  'S-12': 12,
  'S-13': 13,
};

const OBJECT_OF_HEART = {
  'H-1': 1,
  'H-2': 2,
  'H-3': 3,
  'H-4': 4,
  'H-5': 5,
  'H-6': 6,
  'H-7': 7,
  'H-8': 8,
  'H-9': 9,
  'H-10': 10,
  'H-11': 11,
  'H-12': 12,
  'H-13': 13,
};

const OBJECT_OF_CLOVER = {
  'C-1': 1,
  'C-2': 2,
  'C-3': 3,
  'C-4': 4,
  'C-5': 5,
  'C-6': 6,
  'C-7': 7,
  'C-8': 8,
  'C-9': 9,
  'C-10': 10,
  'C-11': 11,
  'C-12': 12,
  'C-13': 13,
};

const OBJECT_OF_DIAMOND = {
  'D-1': 1,
  'D-2': 2,
  'D-3': 3,
  'D-4': 4,
  'D-5': 5,
  'D-6': 6,
  'D-7': 7,
  'D-8': 8,
  'D-9': 9,
  'D-10': 10,
  'D-11': 11,
  'D-12': 12,
  'D-13': 13,
};

export const ARRAY_OF_TRUMP = Object.keys(OBJECT_OF_SPADE)
  .concat(Object.keys(OBJECT_OF_HEART))
  .concat(Object.keys(OBJECT_OF_CLOVER))
  .concat(Object.keys(OBJECT_OF_DIAMOND));

export const OBJECT_OF_TRUMP: { [key: string]: number } = {
  ...OBJECT_OF_SPADE,
  ...OBJECT_OF_HEART,
  ...OBJECT_OF_CLOVER,
  ...OBJECT_OF_DIAMOND,
  '-': 0,
};
