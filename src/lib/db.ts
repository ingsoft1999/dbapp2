import { Knex, knex } from "knex";
import path from "path";

import User from "../models/user";

export const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve("./databases/database.db"),
  },
});

export const getUsers = (): Knex.QueryBuilder<User, User[]> => db("users");


export const initializeTables = async () => {
  
};
