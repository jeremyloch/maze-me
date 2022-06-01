import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CellType {
  EMPTY = "EMPTY",
  WALL = "WALL"
}



type CellMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MazeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cell {
  readonly id: string;
  readonly col?: number | null;
  readonly row?: number | null;
  readonly type?: CellType | keyof typeof CellType | null;
  readonly Maze: Maze;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cellMazeId: string;
  constructor(init: ModelInit<Cell, CellMetaData>);
  static copyOf(source: Cell, mutator: (draft: MutableModel<Cell, CellMetaData>) => MutableModel<Cell, CellMetaData> | void): Cell;
}

export declare class Maze {
  readonly id: string;
  readonly name?: string | null;
  readonly createdOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Maze, MazeMetaData>);
  static copyOf(source: Maze, mutator: (draft: MutableModel<Maze, MazeMetaData>) => MutableModel<Maze, MazeMetaData> | void): Maze;
}