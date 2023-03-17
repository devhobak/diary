import { execute } from "./../utils/mysql.connector";
import { UserQueries } from "./user.queries";
import { IUser } from "./user.model";
import bcrypt from "bcrypt";

/**
 * gets a user based on username provided
 */
export const getUserByName = async (username: IUser["username"]) => {
  return execute<IUser[]>(UserQueries.GetUserByName, [username]);
};

/**
 * gets a user based on ID provided
 */
export const getUserById = async (id: IUser["id"]) => {
  return execute<IUser[]>(UserQueries.GetUserById, [id]);
};
/**
 * adds a new active user record
 */
export const insertUser = async (user: IUser) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const result = await execute<{ affectedRows: number }>(UserQueries.AddUser, [
    user.username,
    hashedPassword,
  ]);
  return result.affectedRows > 0;
};
