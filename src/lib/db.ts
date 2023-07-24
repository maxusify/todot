import Dexie, { Table } from "dexie";

import { Task } from "@/types";

export class DexieDatabase extends Dexie {
  tasks!: Table<Task>;

  public constructor() {
    super("mxsf-todot-database");
    this.version(1).stores({
      tasks: "++id, title, status, created_at, updated_at",
    });
  }
}

export const db = new DexieDatabase();
