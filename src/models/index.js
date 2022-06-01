// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CellType = {
  "EMPTY": "EMPTY",
  "WALL": "WALL"
};

const { Cell, Maze } = initSchema(schema);

export {
  Cell,
  Maze,
  CellType
};